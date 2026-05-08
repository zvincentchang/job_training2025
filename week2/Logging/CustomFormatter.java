import java.util.Date;
import java.util.logging.Formatter;
import java.util.logging.LogRecord;
import java.text.SimpleDateFormat;

public class CustomFormatter extends Formatter {
    private static final SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");

    @Override
    public String format(LogRecord record) {
        StringBuilder sb = new StringBuilder();
        sb.append(df.format(new Date(record.getMillis())))
          .append(" ")
          .append(record.getLevel().getName())
          .append(" [")
          .append(record.getLoggerName())
          .append("] - ")
          .append(formatMessage(record))
          .append(System.lineSeparator());
        if (record.getThrown() != null) {
            try {
                Throwable t = record.getThrown();
                sb.append("Throwable: ").append(t.toString()).append(System.lineSeparator());
                for (StackTraceElement ste : t.getStackTrace()) {
                    sb.append("\tat ").append(ste.toString()).append(System.lineSeparator());
                }
            } catch (Exception ex) {
                // ignore exceptions from formatter
            }
        }
        return sb.toString();
    }
}
