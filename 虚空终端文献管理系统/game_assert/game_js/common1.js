//移动端尺寸
var documentWidth = document.documentElement.clientWidth;//页面DOM的宽度
var containerWidth = documentWidth * 0.92;//容器的宽度
var cellWidth = documentWidth * 0.18;
var cellSpace = documentWidth * 0.04;
console.log(documentWidth, containerWidth, cellWidth, cellSpace);
//获取上边的位置
function getPosTop(i, j) {
	return cellSpace + (cellWidth + cellSpace) * i;
}
//获取左边的位置
function getPosLeft(i, j) {
	return cellSpace + (cellWidth + cellSpace) * j;
}
//获取数字背景的颜色
function getNumberBackgroundColor(num) {
	switch (num) {
		case 2: return "rgb(161 202 228 / 91%)"; break;
		case 4: return "rgb(129 188 237 / 83%)"; break;
		case 8: return "rgb(92 180 229 / 90%)"; break;
		case 16: return "rgb(12 161 231 / 80%)"; break;
		case 32: return "rgb(46 102 233 / 67%)"; break;
		case 64: return "rgb(55 128 252 / 88%)"; break;
		case 128: return "rgb(211 130 221 / 82%)"; break;
		case 256: return "rgb(237 114 179 / 83%)"; break;
		case 512: return "rgb(242 178 255 / 83%)"; break;
		case 1024: return "rgb(237 124 218 / 74%)"; break;
		case 2048: return "#09c"; break;
		case 4096: return "#a6c"; break;
		case 8192: return "#93c"; break;
	}
}
//获取数字颜色
function getNumberColor(num) {
	if (num <= 4) {
		return '#776e65';

	} else {
		return '#fff';
	}
}
//判断是否没有空间
function nospace(nums) {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (nums[i][j] == 0) {
				return false;
			}
		}
	}
	return true;
}
//向左移动
function canMoveLeft(nums) {
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			if (nums[i][j] != 0) {
				if (nums[i][j - 1] == 0 || nums[i][j - 1] == nums[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}
//向上移动
function canMoveUp(nums) {
	for (var i = 1; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (nums[i][j] != 0) {
				if (nums[i - 1][j] == 0 || nums[i - 1][j] == nums[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}
//向右移动
function canMoveRight(nums) {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 3; j++) {
			if (nums[i][j] != 0) {
				if (nums[i][j + 1] == 0 || nums[i][j + 1] == nums[i][j]) { //向右移动应该是+符号
					return true;
				}
			}
		}
	}
	return false;
}
//向下移动
function canMoveDown(nums) {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 4; j++) {
			if (nums[i][j] != 0) {
				if (nums[i + 1][j] == 0 || nums[i + 1][j] == nums[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}
//判断水平方向上是否没有障碍物
function noBlockHorizontal(row, col1, col2, nums) {
	for (var i = col1 + 1; i < col2; i++) {
		if (nums[row][i] != 0) {
			return false;
		}
	}
	return true;
}
//判断垂直方向上是否没有障碍物
function noBlockVertical(col, row1, row2, nums) {
	for (var i = row1 + 1; i < row2; i++) {
		if (nums[i][col] != 0) {
			return false;
		}
	}
	return true;
}
//更新分数
function updateScore(score) {
	$('#score').text(score);
}
//判断是否不能移动
function noMove(nums) {
	if (canMoveLeft(nums) || canMoveUp(nums) || canMoveRight(nums) || canMoveDown(nums)) {
		return false;
	}
	return true;
}
//判断游戏是否结束，两个条件1.没有空的单元格 2.不能移动

function IsGameOver() {
	if (nospace(nums) && noMove(nums)) {
		alert('Game Over!');
	}
}