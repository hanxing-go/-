<%@ page contentType="text/html" pageEncoding="utf-8"%>
<html>
<head>
<meta charset="utf-8">
<title>插入</title>
</head>
<body>
<form action="emp_insert_do.jsp" method="post">
	编号：<input type="text" name="no"><br>
	姓名：<input type="text" name="name"><br>
	性别：<input type="text" name="sex"><br>
	住址：<input type="text" name="site"><br>
	电子邮箱：<input type="text" name="email"><br>
	QQ号：<input type="text" name="qq"><br>
	电话：<input type="text" name="tel"><br>
	<input type="submit" value="增加">
	<input type="reset" value="重置">
</form>
</body>
</html>