package com.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URLEncoder;
import java.util.*;

@RestController
public class ECPayController {

    @Value("${ecpay.merchantId}")
    private String merchantId;

    @Value("${ecpay.hashKey}")
    private String hashKey;

    @Value("${ecpay.hashIV}")
    private String hashIV;

    @Value("${ecpay.serviceUrl}")
    private String serviceUrl;
    /*
     * 測試環境 3D驗證簡訊固定為 1234，不需用手機接收簡訊
		一般信用卡測試卡號 :
 		4311-9511-1111-1111 安全碼 : 任意輸入三碼數字
 		4311-9522-2222-2222 安全碼 : 任意輸入三碼數字
     */
    @GetMapping("/createOrder")
    public String createOrder() throws Exception {
        Map<String, String> params = new LinkedHashMap<>();
        params.put("MerchantID", merchantId);
        params.put("MerchantTradeNo", "TOSN20251124" );
        params.put("MerchantTradeDate", "2025/11/24 16:58:00");
        params.put("PaymentType", "aio");
        params.put("TotalAmount", "298");
        params.put("TradeDesc", "測試交易");
        params.put("ChoosePayment", "ALL");
        params.put("ItemName", "商品一#商品二");
        params.put("ReturnURL", "http://localhost:8080/notify");

        // 計算 CheckMacValue
        String checkMacValue = ECPayUtil.genCheckMacValue(params, hashKey, hashIV);
        params.put("CheckMacValue", checkMacValue);
        System.out.println("Param CheckMacValue:"+checkMacValue);
        // 產生 HTML form
        StringBuilder form = new StringBuilder();
        form.append("<form id='ecpay' method='post' action='").append(serviceUrl).append("'>");
        for (Map.Entry<String, String> entry : params.entrySet()) {
            form.append("<input type='hidden' name='").append(entry.getKey())
                .append("' value='").append(entry.getValue()).append("'/>");
        }
        form.append("<input type='submit' value='送出付款'/>");
        form.append("</form>");
        form.append("<script>document.getElementById('ecpay').submit();</script>");

        return form.toString();
    }
}

