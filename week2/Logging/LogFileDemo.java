
import java.io.IOException;
import java.nio.file.*;
import java.util.logging.*;

public class LogFileDemo {
    private static final Logger logger = Logger.getLogger(LogFileDemo.class.getName());

    public static void main(String[] args) throws IOException {
        Logger root = Logger.getLogger("");
        // 清除預設 handler（可選）
        for (Handler h : root.getHandlers()) {
            root.removeHandler(h);
        }

        // FileHandler constructor: pattern, limit, count, append
        // pattern 可以使用 %u (unique id) 與 %g (generation number)
        // limit = 每個文件最大 bytes ，count = 保留檔案數量
        String pattern = "logs/myapp.%u.%g.log";
        int limit = 1024 * 1024 * 5; // 5 MB per file
        int count = 3;               // 保留 3 個輪替檔案
        boolean append = true;
        // 目標目錄與 pattern（使用 Path 以避免路徑問題）
        Path logDir = Paths.get("logs");
        try {
            // 建立目錄（若已存在則不會拋例外）
        	    if(Files.notExists(logDir)) {
                Files.createDirectories(logDir);
                System.out.println("建立 log 目錄: " + logDir.toAbsolutePath());
        	    }
        } catch (IOException e) {
            System.err.println("無法建立 log 目錄: " + logDir.toAbsolutePath());            
            // 若目錄無法建立，改用 console 並退出或繼續（視需求）
            ConsoleHandler ch = new ConsoleHandler();
            ch.setLevel(Level.ALL);
            ch.setFormatter(new SimpleFormatter());
            root.addHandler(ch);
            root.setLevel(Level.ALL);
            logger.severe("使用 fallback ConsoleHandler，因為無法建立 log 目錄");
            return;
        } 
        
        FileHandler fileHandler = new FileHandler(pattern, limit, count, append);
        fileHandler.setLevel(Level.INFO);
        fileHandler.setFormatter(new SimpleFormatter()); // 可改用自訂格式

        root.setLevel(Level.INFO);
        root.addHandler(fileHandler);
        logger.info("log Path:"+logDir.toAbsolutePath());
        System.out.println("log Path:"+logDir.toAbsolutePath());
        // 產生一些 log 測試輪替
        for (int i = 1; i <= 20; i++) {
            logger.info("Logging line " + i + " - this is a longish message to fill file faster.");
        }

        logger.info("Completed logging");
    }
}