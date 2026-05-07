import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class StudentController
extends HttpServlet {

    protected void doGet(
        HttpServletRequest request,
        HttpServletResponse response)

    throws ServletException, IOException {

        // MODEL

        Student student =
            new Student("Navya");

        // SEND DATA TO VIEW

        request.setAttribute(
            "studentName",
            student.getName()
        );

        // FORWARD TO JSP

        RequestDispatcher rd =
            request.getRequestDispatcher(
                "index.jsp"
            );

        rd.forward(request, response);

    }

}