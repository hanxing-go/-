/*
Navicat MySQL Data Transfer

Source Server         : wsx
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : mldn

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2020-07-02 14:24:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `emp`
-- ----------------------------
DROP TABLE IF EXISTS `emp`;
CREATE TABLE `emp` (
  `empno` int(4) NOT NULL,
  `ename` varchar(10) DEFAULT NULL,
  `job` varchar(9) DEFAULT NULL,
  `hiredate` date DEFAULT NULL,
  `sal` float(7,2) DEFAULT NULL,
  PRIMARY KEY (`empno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of emp
-- ----------------------------
INSERT INTO `emp` VALUES ('1', '张三', '程序员', '2012-12-01', '3000.00');
INSERT INTO `emp` VALUES ('2', '李四', '经理', '2010-01-01', '6000.00');
INSERT INTO `emp` VALUES ('88', '王五', '程序员', '2020-01-01', '4000.00');

-- ----------------------------
-- Table structure for `person`
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `onNo` varchar(20) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `onName` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `onSex` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `onSite` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `onEmail` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `onQQ` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `onTel` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`onNo`)
) ENGINE=InnoDB DEFAULT CHARSET=gb2312 COLLATE=gb2312_bin;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('1', '李美丽', '1', '1', '1', '1', '1');
INSERT INTO `person` VALUES ('10', '太阳', '10', '10', '10', '10', '10');
INSERT INTO `person` VALUES ('2', '李四', '女', '19', '九江市', '123', '456');
INSERT INTO `person` VALUES ('6', '6', '6', '6', '6', '6', '6');
INSERT INTO `person` VALUES ('8', 'Zhongshan', '8', '8', '8', '8', '8');
INSERT INTO `person` VALUES ('9', '月亮', '9', '9', '9', '9', '9');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userid` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', 'admin', 'admin');
