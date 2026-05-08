

import javax.servlet.ServletRequest;
import javax.servlet.ServletRequestAttributeEvent;
import javax.servlet.ServletRequestAttributeListener;
import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.annotation.WebListener;

/**
 * Application Lifecycle Listener implementation class MyRequestListener
 *
 */
@WebListener
public class MyRequestListener implements ServletRequestListener, ServletRequestAttributeListener {

    /**
     * Default constructor. 
     */
    public MyRequestListener() {
        // TODO Auto-generated constructor stub
    }
    public void requestDestroyed(ServletRequestEvent sre) {
        logout("request destroyed");
    }

    public void requestInitialized(ServletRequestEvent sre) {
        logout("request init");
        ServletRequest sr = sre.getServletRequest();

        if (sr.getRemoteAddr().startsWith("127") && sr.getRemoteAddr().endsWith("1")) {
            sr.setAttribute("isLogin", new Boolean(true));
        } else {
            sr.setAttribute("isLogin", new Boolean(false));
        }
    }//ServletRequestListener
    //ServletRequestAttributeListener

    public void attributeAdded(ServletRequestAttributeEvent event) {
        logout("attributeAdded('" + event.getName() + "', '"
                + event.getValue() + "')");
    }

    public void attributeRemoved(ServletRequestAttributeEvent event) {
        logout("attributeRemoved('" + event.getName() + "', '"
                + event.getValue() + "')");
    }

    public void attributeReplaced(ServletRequestAttributeEvent event) {
        logout("attributeReplaced('" + event.getName() + "', '"
                + event.getValue() + "')");

    }//ServletRequestAttributeListener

    private void logout(String msg) {
        System.out.println(msg);
    }


	
}
