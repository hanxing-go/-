<%@ page contentType="text/html" pageEncoding="utf-8"%>
<%@ page import="java.util.Date" %>
<%@ page import="java.sql.*"%>
<html>
<head><title></title></head>
<%!  
	public static final String DBDRIVER = "org.gjt.mm.mysql.Driver" ;
	public static final String DBURL = "jdbc:mysql://localhost:3306/mldn" ;
	public static final String DBUSER = "root" ;
	public static final String DBPASS = "1234" ;
%>
<%
	Connection conn = null ;
	PreparedStatement pstmt = null ;
	//Statement pstmt = null ;
	ResultSet rs = null ;
	 boolean flag=false;
%>
<%
   request.setCharacterEncoding("utf-8");//设置请求的编码格式为utf-8
   String no = request.getParameter("no");
   String name = request.getParameter("name");
   String sex = request.getParameter("sex");
   String site = request.getParameter("site");
   String email = request.getParameter("email");
   String qq = request.getParameter("qq");
   String tel = request.getParameter("tel");   
%>
<%  
try{
	Class.forName(DBDRIVER) ;
	conn = DriverManager.getConnection(DBURL,DBUSER,DBPASS) ;
%>

<body>
<% 
    flag = false ;          
	String sql = "UPDATE person SET onNo=?,onName=?,onSex=?,onSite=?,onEmail=?,onQQ=?,onTel=? WHERE onNo=?" ;
	pstmt = conn.prepareStatement(sql) ;
	pstmt.setString(1,no) ;
	pstmt.setString(2,name) ;
	pstmt.setString(3,sex) ;
	pstmt.setString(4,site) ;
	pstmt.setString(5,email) ;
	pstmt.setString(6,qq) ;
	pstmt.setString(7,tel);
	pstmt.setString(8,no);
	
	if(pstmt.executeUpdate() > 0){
		flag = true;
	}			
%>
<%
}catch(Exception e)	{
	System.out.println(e) ;
}finally{	
	pstmt.close() ;
	conn.close() ;	
}
%>

<%
	if(flag){	// 插入成功
%>
	<h1>信息修改成功！</h1>	
<%
	} else {		// 插入失败
%>
	<h1>信息修改失败</h1>	
<%
	}
%>
</body>
</html>