<%@ page contentType="text/html" pageEncoding="utf-8"%>
<%@ page import="java.sql.*"%>
<html>
<head><title>查询</title>
<style>
   .row1{
      background-color:skyblue;
      text-align: center;      
   }
</style>
</head>

<body>
<%
   out.println("<h1>个人信息</h1>");
   request.setCharacterEncoding("utf-8");
%>
<%!  
	public static final String DBDRIVER = "org.gjt.mm.mysql.Driver" ;
	public static final String DBURL = "jdbc:mysql://localhost:3306/mldn" ;
	public static final String DBUSER = "root" ;
	public static final String DBPASS = "1234" ;
%>
<%
	Connection conn = null ;
	PreparedStatement pstmt = null ;
	ResultSet rs = null ;
%>
<%
try{
	Class.forName(DBDRIVER) ;
	conn = DriverManager.getConnection(DBURL,DBUSER,DBPASS) ;
	String sql = "SELECT onNo,onName,onSex,onSite,onEmail,onQQ,OnTel FROM person" ;
	pstmt = conn.prepareStatement(sql) ;
	rs = pstmt.executeQuery() ;
%>
<center>
<table border="1" width="80%">
	<tr class="row1">
		<td>编号</td>
		<td>姓名</td>
		<td>性别</td>
		<td>住址</td>
		<td>邮箱</td>
		<td>QQ</td>
		<td>电话</td>		
	</tr>
<%
	while(rs.next()){
		String no = rs.getString(1) ;
		String name = rs.getString(2) ;
		String sex = rs.getString(3) ;
		String site = rs.getString(4) ;
		String email = rs.getString(5) ;
		String qq = rs.getString(6) ;
		String tel = rs.getString(7) ;
		
%>
	<tr>
		<td><%=no%></td>
		<td><%=name%></td>
		<td><%=sex%></td>
		<td><%=site%></td>
		<td><%=email%></td>
		<td><%=qq%></td>
		<td><%=tel%></td>
	</tr>	
<%
	}
%>
</table>
</center>
<%
}catch(Exception e)	{
	System.out.println(e) ;
}finally{
	rs.close() ;
	pstmt.close() ;
	conn.close() ;	
}
%>
</body>
</html>