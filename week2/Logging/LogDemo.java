import java.util.logging.ConsoleHandler;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

public class LogDemo {

	
		private static final Logger logger = Logger.getLogger(LogDemo.class.getName());

	    public static void main(String[] args) {
	        // 移除預設 handler（若有），改用自訂 ConsoleHandler 與自訂 Formatter
	        Logger root = Logger.getLogger("");
	        // 清空預設 handlers（可選）
	        for (Handler h : root.getHandlers()) {
	            root.removeHandler(h);
	        }

	        ConsoleHandler consoleHandler = new ConsoleHandler();
	        consoleHandler.setLevel(Level.FINER); // handler 等級
	        //consoleHandler.setFormatter(new SimpleFormatter()); // 也可以使用自訂 Formatter
	        consoleHandler.setFormatter(new CustomFormatter()); // 也可以使用自訂 Formatter

	        // 設定 root logger level（影響所有 logger）
	        root.setLevel(Level.FINER);
	        root.addHandler(consoleHandler);

	        // 範例 log
	        logger.severe("SEVERE - 重大錯誤");
	        logger.warning("WARNING - 警告");
	        logger.info("INFO - 一般資訊");
	        logger.fine("FINE - 偵錯（較低等級）");
	        logger.finer("FINER - 更詳細的偵錯");
	    }
	

}
