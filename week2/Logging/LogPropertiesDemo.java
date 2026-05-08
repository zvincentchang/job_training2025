
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.*;
import java.util.logging.*;

public class LogPropertiesDemo {
    private static final Logger logger = Logger.getLogger(LogPropertiesDemo.class.getName());

    public static void main(String[] args) {
        // 先建立 logs 目錄，避免 FileHandler 在初始化時找不到路徑而拋例外
        Path logDir = Paths.get("logs");
        try {
            Files.createDirectories(logDir);
        } catch (IOException e) {
            System.err.println("無法建立 log 目錄: " + logDir.toAbsolutePath());
            e.printStackTrace();
            // fallback: 直接用 console logger 並結束
            setupConsoleFallback();
            logger.severe("使用 fallback ConsoleHandler，因為無法建立 log 目錄");
            return;
        }

        // 預設 config 檔案名稱（可用 -Djava.util.logging.config.file 指定其他路徑）
        String configFile = System.getProperty("java.util.logging.config.file", "logging.properties");
        Path configPath = Paths.get(configFile);
        if (!Files.exists(configPath)) {
            System.err.println("找不到 logging config 檔案: " + configPath.toAbsolutePath());
            System.err.println("程式會使用預設 logging 設定（Console）。");
            setupConsoleFallback();
        } else {
            // 以程式方式讀入 logging.properties，確保我們已經建立 logs 目錄後再建立 FileHandler
            try (InputStream is = Files.newInputStream(configPath, StandardOpenOption.READ)) {
                LogManager.getLogManager().readConfiguration(is);
            } catch (IOException | SecurityException ex) {
                System.err.println("讀取 logging config 檔案發生錯誤，改為 Console fallback:");
                ex.printStackTrace();
                setupConsoleFallback();
            }
        }

        // 產生不同等級的 log 測試
        logger.severe("SEVERE - 重大錯誤");
        logger.warning("WARNING - 警告");
        logger.info("INFO - 一般資訊");
        logger.config("CONFIG - 設定相關資訊");
        logger.fine("FINE - 偵錯（較低等級）");
        logger.finer("FINER - 更詳細的偵錯");
        logger.finest("FINEST - 最詳細的偵錯");

        // 示範例外輸出
        try {
            throw new RuntimeException("測試例外");
        } catch (RuntimeException rex) {
            logger.log(Level.SEVERE, "捕捉到例外", rex);
        }

        System.out.println("完成 log 測試。請檢查 logs/ 目錄或 console 輸出。");
    }

    private static void setupConsoleFallback() {
        Logger root = Logger.getLogger("");
        // 清除已有 handler，改為只輸出到 Console
        for (Handler h : root.getHandlers()) {
            root.removeHandler(h);
        }
        ConsoleHandler ch = new ConsoleHandler();
        ch.setLevel(Level.ALL);
        ch.setFormatter(new SimpleFormatter());
        root.addHandler(ch);
        root.setLevel(Level.ALL);
    }
}
