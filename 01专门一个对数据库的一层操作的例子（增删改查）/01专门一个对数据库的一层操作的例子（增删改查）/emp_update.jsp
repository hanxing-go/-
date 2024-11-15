<%@ page contentType="text/html" pageEncoding="utf-8"%>
<%@ page import="java.util.*"%>
<%@ page import="java.sql.*"%>
<html>
<head><title></title></head>
<%	request.setCharacterEncoding("utf-8") ;	%>
<body>
<%
	String keyWord = request.getParameter("kw") ;
	if(keyWord == null){
		keyWord = "" ;	// 如果没有查询关键字，则查询全部
	}
	//List<Emp> all = DAOFactory.getIEmpDAOInstance().findAll(keyWord) ;
	//Iterator<Emp> iter = all.iterator() ;
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
	  conn = DriverManager.getConnection(DBURL,DBUSER,DBPASS);
	  String sql = "SELECT onNo,onName,onSex,onSite,onEmail,onQQ,OnTel FROM person WHERE onNo=?";
	  pstmt = conn.prepareStatement(sql) ;
	  pstmt.setString(1,keyWord) ;
	        
	  rs = pstmt.executeQuery() ;	
%>
<center>
<form action="emp_update.jsp" method="post">
	请输入要修改的用户编号：<input type="text" name="kw">
	<input type="submit" value="查询">
</form>
<table border="1" width="80%"> 
	<tr>
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
		<tr>
		<td><%=no%></td>
		<td><%=name%></td>
		<td><%=sex%></td>
		<td><%=site%></td>
		<td><%=email%></td>
		<td><%=qq%></td>
		<td><%=tel%></td>
	</tr>	
	</tr>
 </table>
 
<form action="emp_update_do.jsp" method="post">
	编号：<input type="text" name="no" value=<%=no%>><br>
	姓名：<input type="text" name="name" value=<%=name%>><br>
	性别：<input type="text" name="sex" value=<%=sex%>><br>
	住址：<input type="text" name="site" value=<%=site%>><br>
	电子邮箱：<input type="text" name="email" value=<%=email%>><br>
	QQ号：<input type="text" name="qq" value=<%=qq%>><br>
	电话：<input type="text" name="tel" value=<%=tel%>><br>
	<input type="submit" value="修改">
	
</form>
</center>


<% 
  }
  
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