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
	  String sql = "SELECT onNo,onName,onSex,onSite,onEmail,onQQ,OnTel FROM person WHERE onName LIKE ? OR onSite LIKE ? OR onNo LIKE ? OR onSex LIKE ? OR onEmail LIKE ? OR onQQ LIKE ? OR onTel LIKE ?";
	  pstmt = conn.prepareStatement(sql) ;
	  pstmt.setString(1,"%"+keyWord+"%") ;
      pstmt.setString(2,"%"+keyWord+"%") ;
      pstmt.setString(3,"%"+keyWord+"%") ;
      pstmt.setString(4,"%"+keyWord+"%") ;
      pstmt.setString(5,"%"+keyWord+"%") ;
      pstmt.setString(6,"%"+keyWord+"%") ;
      pstmt.setString(7,"%"+keyWord+"%") ;
      
	  rs = pstmt.executeQuery() ;	
%>
<center>
<form action="emp_list.jsp" method="post">
	请输入查询关键字：<input type="text" name="kw">
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

</table>
</center>
</body>
</html>