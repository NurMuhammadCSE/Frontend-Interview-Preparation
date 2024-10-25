#include <iostream>
#include <vector>
using namespace std;

int removeDuplicates(vector<int>& nums) {
    if (nums.size() == 0) return 0; // যদি অ্যারেটি ফাঁকা থাকে
    
    int k = 1; // অনন্য সংখ্যার জন্য ইনডেক্স, প্রথম সংখ্যা নিশ্চিতভাবে অনন্য
    
    for (int i = 1; i < nums.size(); i++) {
        // যদি nums[i] এবং nums[i-1] ভিন্ন হয়, তাহলে এটি একটি নতুন অনন্য সংখ্যা
        if (nums[i] != nums[i - 1]) {
            nums[k] = nums[i]; // অনন্য সংখ্যাটিকে k ইনডেক্সে বসানো
            k++; // k কে এক ধাপ এগিয়ে নেওয়া
        }
    }
    
    return k; // k এর মান অনন্য সংখ্যার সংখ্যা
}

int removeDuplicatesTwo(int arr[], int n)
{
  int i = 0;
  for (int j = 1; j < n; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

int main() {
    vector<int> nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
    int k = removeDuplicates(nums);
    
    cout << "Unique count: " << k << endl;
    cout << "Array after removing duplicates: ";
    for (int i = 0; i < k; i++) {
        cout << nums[i] << " ";
    }
    
    return 0;
}
