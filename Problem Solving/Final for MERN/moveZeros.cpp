#include <iostream>
#include <vector>
using namespace std;

void moveZeroes(vector<int>& nums) {
    int n = nums.size();
    int nonZeroPos = 0; // শূন্য-বিহীন সংখ্যা রাখার ইনডেক্স
    
    // প্রথমে শূন্য ছাড়া সব সংখ্যা তাদের নতুন অবস্থানে নিয়ে আসা
    for (int i = 0; i < n; i++) {
        if (nums[i] != 0) {
            nums[nonZeroPos] = nums[i];
            nonZeroPos++; // শূন্য-বিহীন সংখ্যা পেলে ইনডেক্স এগিয়ে নাও
        }
    }
    
    // এখন অবশিষ্ট স্থানে শূন্য বসিয়ে দাও
    for (int i = nonZeroPos; i < n; i++) {
        nums[i] = 0;
    }
}

int main() {
    vector<int> nums = {0, 1, 0, 3, 12};
    
    moveZeroes(nums); // শূন্যগুলো সরাও এবং শূন্য-বিহীন সংখ্যাগুলোর ক্রম ঠিক রাখো
    
    cout << "Array after moving zeroes: ";
    for (int num : nums) {
        cout << num << " ";
    }
    
    return 0;
}
