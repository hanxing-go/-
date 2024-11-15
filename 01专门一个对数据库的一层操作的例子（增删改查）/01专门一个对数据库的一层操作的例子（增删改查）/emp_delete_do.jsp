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
   String no = request.getParameter("no"); 
%>
<%  
try{
	Class.forName(DBDRIVER) ;
	conn = DriverManager.getConnection(DBURL,DBUSER,DBPASS) ;
%>

<body>
<% 
    flag = false ;          
	String sql = "delete from person where onNO=?";
	pstmt = conn.prepareStatement(sql) ;
	pstmt.setString(1,no) ;	
	
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
	<h1>信息删除成功！</h1>	
<%
	} else {		// 插入失败
%>
	<h1>信息删除失败</h1>	
<%
	}
%>
</body>
</html>