/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise

 * Valid Palindrome => validCharacter, toLowerCase, checkPalindrome, isPalindrome
 */
#include<bits/stdc++.h>
using namespace std;

string reverseString(string str) {
    int start = 0;
    int end = str.length() - 1;
    
    while (start < end) {
        swap(str[start], str[end]);
        start++;
        end--;
    }
    return str;
}

string reverseWords(string s) {
    // Reverse the entire string
    reverse(s.begin(), s.end());

    int start = 0;
    for (int i = 0; i <= s.length(); i++) {
        // When we hit a space or the end of the string, reverse the word
        if (i == s.length() || s[i] == ' ') {
            reverse(s.begin() + start, s.begin() + i);
            start = i + 1;
        }
    }

    return s; // Return the modified string
}

string reverseWords(string s) {
    // Create a stringstream to read words from the input string
    stringstream ss(s);
    string word;
    vector<string> words;

    // Extract each word and store it in a vector
    while (ss >> word) {
        words.push_back(word);
    }

    // Reverse the words in the vector
    string result = "";
    for (int i = words.size() - 1; i >= 0; i--) {
        result += words[i];
        if (i != 0) {
            result += " "; // Add space between words
        }
    }

    return result;
}

string replaceSpaces(string &str){
	string temp = "";
    
    for(int i=0; i<str.length(); i++) {
        if(str[i] == ' '){
            temp.push_back('@');
            temp.push_back('4');
            temp.push_back('0');
        }
        else
        {
            temp.push_back(str[i]);
        }
    }
    return temp;
}

class Solution {
public:
    string removeOccurrences(string s, string part) {
        
        while(s.length()!=0 && s.find(part) < s.length()) {
            s.erase(s.find(part), part.length());
        }
        return s;
    }
};


//! Intro

char toLowerCase(char ch) {
    if(ch >='a' && ch <='z')
        return ch;
    else{
        char temp = ch - 'A' + 'a';
        return temp;
    }
}

bool checkPalindrome(char a[], int n) {
    int s = 0;
    int e = n-1;

    while(s<=e) {
        if(toLowerCase( a[s] ) != toLowerCase( a[e] ) )
        {
            return 0;       
        }
        else{
            s++;
            e--;
        }
    }
    return 1;
}

void reverse(char name[], int n) {
    int s=0;
    int e = n-1;

    while(s<e) {
        swap(name[s++], name[e--]);
    }
}

int getLength(char name[]) {
    int count = 0;
    for(int i = 0; name[i] != '\0'; i++) {
        count++;
    }

    return count;
}

char getMaxOccCharacter(string s) {

    int arr[26] = {0};


    //create an array of count of characters
    for(int i=0; i<s.length(); i++) {
        char ch = s[i];
        //lowercase
        int number = 0;
        number = ch - 'a';
        arr[number]++;
    }

    //find maximum occ character
    int maxi = -1, ans = 0;
    for(int i=0;i<26; i++) {
        if(maxi < arr[i]) {
            ans = i;
            maxi = arr[i];
        }
    }
    

    return 'a'+ans;

}

int main() {
    string input = "the sky is blue";
    cout << "Reversed string: " << reverseWords(input) << endl;
    return 0;
}
