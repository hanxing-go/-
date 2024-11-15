package jxnu.servlet;

import com.alibaba.fastjson.JSONObject;
import jxnu.entire.Score;
import jxnu.entire.Student;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.Arrays;

@WebServlet(name = "My_Servlet", value = "/My_Servlet")
public class My_Servlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        response.setHeader("Access-Control-Allow-Origin","*");
        // response.getWriter().write("你好");
        // int[] score=new int[]{1,23,4,5,60};
        // response.getWriter().write(JSONObject.toJSONString(score));
        // Student zx=new Student("张旭",19);
        // response.getWriter().write(JSONObject.toJSONString(zx));

        // 设置初始分数
        int singleScore = 0;
        int singleNum = 3;
        // 定义单选题答案：
        String[] singleAnswer = {"A", "B", "A"};

        // 获取前端传来的数据
        for (int i = 1; i <= singleNum; i++) {
            try {
                String question="q"+i;

                String ans = request.getParameter(question);
                System.out.println(ans);
//                System.out.println(question);
                if (ans != null && ans.equals(singleAnswer[i - 1])) {
                    singleScore += 20;
                }
            } catch (Exception e) {
                System.out.println("处理参数 q" + i + " 时出错: " + e.getMessage());
            }
        }

        // 定义多选题答案：
        String[] multipleAnswer = {"AB", "CD"};
        // 设置初始分数
        int multiplyScore = 0;
        int multipleNum = 5;
        for (int i = singleNum + 1, j = 1; i <= multipleNum; i++, j++) {
            try {
                String question = "q" + i;
                String[] ans = request.getParameterValues(question);

                System.out.println(Arrays.toString(ans));
//                System.out.println(Arrays.toString(multipleAnswer[j - 1].split("")));
                if (ans != null && ans.length > 0 && Arrays.equals(ans, multipleAnswer[j - 1].split(""))) {
                    multiplyScore += 20;
                }
            } catch (Exception e) {
                System.out.println("处理参数 q" + i + " 时出错: " + e.getMessage());
            }
        }
        // 获取分数类
        Score myScore = new Score(singleScore, multiplyScore);
        // 返回分数
        response.getWriter().write(JSONObject.toJSONString(myScore));
        request.getRequestDispatcher( "../src/main/webapp/11.jsp").forward(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
