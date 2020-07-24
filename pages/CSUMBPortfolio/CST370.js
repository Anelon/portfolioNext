import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST370 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 370",
			classDesc: "This class investigates the data structures that are used in computer science in the C++ or Java language. This class covers topics such as hash tables, stacks, heaps, trees, and graph structures, as well as sorting and searching algorithms and graph traversal. Applying the knowledge from this course will help in creating optimized software. Algorithms are also used regularly in the hiring process for multiple companies to weed out the uninitiated. Proficiency developed in this course will be crucial to getting a foot in the door and landing a job.",
			imgDir: "/images/370images/"
		}
	}
	render() {
		let desc = this.state.classDesc;
		let imgDir = this.state.imgDir;
		let projects = [
			{
				title:"Difference Between Times",
				img1:"timeMath.png",
				code:`#include <iostream>
#include <iomanip>
#include <utility>
#include <algorithm>
#include <sstream>
using namespace std;

class TimeStamp {
	private:
		int hour = 0;
		int mins = 0;
		int secs = 0;
	public:
		TimeStamp() {}
		TimeStamp(string timeStamp) {
			stringToTime(timeStamp);
		}
		void stringToTime(string timeStamp) {
			stringstream ss(timeStamp);
			string temp;
			getline(ss,temp,':');
			hour = stoi(temp);
			getline(ss,temp,':');
			mins = stoi(temp);
			getline(ss,temp,':');
			secs = stoi(temp);
		}
		TimeStamp* operator=(const TimeStamp &right) {
			this->hour = right.hour;
			this->mins = right.mins;
			this->secs = right.secs;
			return this;
		}
		TimeStamp operator-(const TimeStamp &right) const {
			TimeStamp retVal;
			TimeStamp left = *this;

			if(left.secs < right.secs) {
				left.secs += 60;
				retVal.mins = -1;
			}
			retVal.secs = left.secs - right.secs;
			if(left.mins < right.mins) {
				left.mins += 60;
				retVal.hour = -1;
			}
			retVal.mins += left.mins - right.mins;
			if(left < right) {
				left.hour += 24; //roll the time around to the next day
			}
			retVal.hour += left.hour - right.hour;
			return retVal;
		}
		bool operator<(const TimeStamp &rhs) const {
			if(this->hour == rhs.hour) {
				if(this->mins == rhs.mins) {
					return this->secs < rhs.secs;
				}
				return this->mins < rhs.mins;
			}
			return this->hour < rhs.hour;
		}
		friend ostream &operator<<(ostream &outs, const TimeStamp &ts);
		friend istream &operator>>(istream &ins, const TimeStamp &ts);

};
ostream &operator<<(ostream &outs, const TimeStamp &ts) {
	outs << setfill('0') << setw(2);
	outs << ts.hour << ":";
	outs << setfill('0') << setw(2);
	outs << ts.mins << ":";
	outs << setfill('0') << setw(2);
	outs << ts.secs;
	return outs;
}

istream &operator>>(istream &ins, TimeStamp& ts) {
	string temp;
	ins >> temp;
	ts.stringToTime(temp);
	return ins;
}

int main() {
	TimeStamp time1, time2;
	cin >> time1 >> time2;
	//cout << time1 << endl;
	//cout << time2 << endl;
	cout << (time2 - time1) << endl;
}`,
				desc:"I made a TimeStamp class which I wanted to use operator overloading in C++ to make it so that you can add and subtract times with simple operations, as well as read and print TimeStamps.",
			},
			{
				title:"Recursive Palindrome",
				img1:"palindrome.png",
				code:`#include <iostream>
#include <vector>
using namespace std;

string cleanString(string s) {
	string retStr;
	for(char c : s) {
		if(isalpha(c)) retStr.push_back(toupper(c));
		if(isdigit(c)) retStr.push_back(c);
	}
	return retStr;
}

bool palindrome(string s, size_t index) {
	//cout << index << endl;
	if(index >= s.size() / 2) return true;
	if(s.at(index) == s.at(s.size()-1 - index)) {
		return palindrome(s, ++index);
	} else {
		return false;
	}
}


int main() {
	string str;
	getline(cin, str);
	str = cleanString(str);
	//cout << str << endl;
	if(palindrome(str, 0)) {
		cout << "TRUE" << endl;
	} else {
		cout << "FALSE" << endl;
	}
}`,
				desc:"Checking for a palindrome recursively was interesting as checking for a palindrome is a common interview question. I have also implemented it non-recursively a few times using either iterating across the string or reversing and checking if it is the same as the reversed version.",
			},
			{
				title:"2d Coin Path",
				img1:"coinPath.png",
				code:`#include <iostream>
#include <vector>
#include <sstream>
#include <algorithm>
using namespace std;

const bool debug = false;

struct Coords {
	Coords(int i, int j) { x = i; y = j; }
	int x = -1, y = -1;
	friend ostream& operator<<(ostream& outs, Coords c) {
		outs << "(" << c.x << "," << c.y << ")";
		return outs;
	}
};

struct Path {
	int coins = 0;
	vector<Coords> path;
};

class Matx {
	private:
		static const int BLOCK = 2;
		static const int COIN = 1;
		static const int INFINIT = -10;
		int width = 0;
		int height = 0;
		vector<int> mat;
	public:
		Matx(int size) {
			this->width = size;
			this->height = size;
			this->mat = vector<int>(width * height);
		}
		Matx(int width, int height) {
			this->width = width;
			this->height = height;
			this->mat = vector<int>(width * height);
		}
		//x, y returns index
		inline int index(int i, int j) const {
			return i + j * width;
		}

		vector<int> getMat() { return mat; }

		Path collectCoins() const {
			Matx count(width, height);
			vector<Coords> path;
			//forward iterate
			for(int j = 0; j < height; j++) {
				bool blocked = false;
				for(int i = 0; i < width; i++) {
					//if blocked
					if(mat.at(index(i,j)) == BLOCK) {
						blocked = true;
						count.mat.at(index(i,j)) = INFINIT;
						continue;
					}
					int top = 0, bot = 0;
					if(j - 1 >= 0) top = count.mat.at(index(i,j-1));
					if(i - 1 >= 0) bot = count.mat.at(index(i-1,j));

					if(top > bot) count.mat.at(index(i,j)) = top;
					else count.mat.at(index(i,j)) = bot;

					if(!blocked || count.mat.at(index(i,j)) > 0)
						count.mat.at(index(i,j)) += mat.at(index(i,j));
				}
			}
			if(debug) {
				cout << count << endl;
				cout << "Max:" << count.mat.at(index(width-1, height-1)) << endl;
			}

			//backtrace
			int i = width - 1, j = height - 1;
			//push end to path
			path.push_back(Coords(i+1,j+1));
			while(true) {
				int top = -1, bot = -1;
				if(j - 1 >= 0) top = count.mat.at(index(i,j-1));
				if(i - 1 >= 0) bot = count.mat.at(index(i-1,j));

				if(top > bot) j--;
				else i--;

				Coords curr(i+1,j+1);
				path.push_back(curr);
				if(i == 0 && j == 0) {
					break;
				}
			}

			//reverse the path
			reverse(path.begin(), path.end());
			return {count.mat.at(index(width-1, height-1)), path};
		}

		friend istream &operator>>(istream& ins, Matx& matrix) {
			for(int j = 0; j < matrix.height; j++) {
				for(int i = 0; i < matrix.width; i++) {
					int x;
					ins >> x;
					matrix.mat.at(matrix.index(i,j)) = x;
				}
			}
			return ins;
		}
		friend ostream &operator<<(ostream& outs, const Matx& matrix) {
			for(int j = 0; j < matrix.height; j++) {
				for(int i = 0; i < matrix.width; i++) {
					outs << matrix.mat.at(matrix.index(i,j)) << " ";
				}
				outs << endl;
			}
			return outs;
		}
};

int main() {
	int width = 0, height = 0;
	cin >> width >> height;
	Matx matrix(width, height);
	cin >> matrix;
	if(debug) {
		cout << "Initial Matrix:" << endl;
		cout << matrix << endl;
	}

	Path path = matrix.collectCoins();
	cout << "Max coins:" << path.coins << endl;
	//probably overcomplicated but why not
	stringstream ss("");
	for(Coords c : path.path) {
		ss << c << "->";
	}
	string pathStr;
	getline(ss, pathStr);
	//get rid of trailing ->
	pathStr.pop_back();
	pathStr.pop_back();
	cout << "Path:" << pathStr << endl;
}`,
				desc:"This assignment was to figure out what the best path would be for you to traverse to pick up the most coins while only moving down or right.",
			},
			{
				title:"Floyd's Minimum Path",
				img1:"floyds.png",
				code:`#include <iostream>
#include <vector>
using namespace std;

const bool debug = false;

class Matx {
	private:
		static const int INFINIT = -1;
		int size = 0;
		vector<int> mat;
	public:
		Matx(int size) {
			this->size = size;
			this->mat = vector<int>(size * size);
		}
		/*
			 Matx(const Matx& other) {
			 size = other.size;
			 mat = other.mat;
			 }
			 */
		int index(int i, int j) const {
			return j + i * size;
		}

		Matx floyds() const {
			Matx floyds = *this;
			for(int d = 0; d < floyds.size; d++) {
				for(int i = 0; i < floyds.size; i++) {
					//don't look at current?
					//if(i == d) continue;
					//skip if infinit
					if(floyds.mat.at(index(i,d)) == INFINIT) continue;

					//check all x's
					for(int j = 0; j < floyds.size; j++) {
						//skip if same
						if(j == i) continue;
						//skip if infinit
						if(floyds.mat.at(index(d,j)) == INFINIT) continue;

						int newDist = floyds.mat.at(index(i,d)) + floyds.mat.at(index(d,j));

						//if shorter new distance
						if(floyds.mat.at(index(i,j)) > newDist) {
							floyds.mat.at(index(i,j)) = newDist;
							//or was infinit
						} else if (floyds.mat.at(index(i,j)) == INFINIT) {
							floyds.mat.at(index(i,j)) = newDist;
						}
					}
				}
				if(debug) {
					cout << "D(" << d+1 << ")" << endl;
					cout << floyds << endl;
				}
			}

			return floyds;
		}

		friend istream &operator>>(istream& ins, Matx& matrix) {
			for(int i = 0; i < matrix.size; i++) {
				for(int j = 0; j < matrix.size; j++) {
					int x;
					ins >> x;
					matrix.mat.at(matrix.index(i,j)) = x;
				}
			}
			return ins;
		}
		friend ostream &operator<<(ostream& outs, const Matx& matrix) {
			for(int i = 0; i < matrix.size; i++) {
				for(int j = 0; j < matrix.size; j++) {
					outs << matrix.mat.at(matrix.index(i,j)) << " ";
				}
				outs << endl;
			}
			return outs;
		}
};

int main() {
	int size = 0;
	cin >> size;
	Matx matrix(size);
	cin >> matrix;
	if(debug) cout << matrix << endl;

	cout << matrix.floyds();
}`,
				desc:"Finding the minimum path is a very common problem, especially in mapping and pathing applications. Being able to find the shortest path in a graph quickly and efficiently is important when writing these applications.",
			},
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					{/*<h1 className="text-center">{name}</h1>*/}
					<p className="desc">
						{desc}
						<br/>
						<br/>
						I had fun seeing how you can solve problems with the standard library functions, and even implementing a few of them on my own sometimes.
					</p>
					{/* tabs requires 2 items in */}
					<Imgs imgs={projects} imgDir={this.state.imgDir} lang={"cpp"}/>
				</div>
			</Layout>
		);
	}
}

export default CST370;
