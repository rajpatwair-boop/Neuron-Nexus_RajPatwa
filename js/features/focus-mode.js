// ==========================================
// FOCUS MODE - CODING CHALLENGE SYSTEM
// Manual coding practice with real-time execution
// ==========================================

const FocusMode = {
    // Current problem state
    currentProblem: 0,
    problems: [],
    userCode: '',
    selectedLanguage: 'python',
    
    // Backend API Configuration
    API_BASE_URL: 'http://localhost:5001/api',
    useBackend: true, // Set to false to use client-side simulation
    
    // Coding challenges database (Undergraduate Programming)
    challenges: [
        {
            id: 1,
            title: "Factorial Calculator",
            difficulty: "Easy",
            description: "Write a program to calculate the factorial of a given number n. The factorial of n (denoted as n!) is the product of all positive integers less than or equal to n.",
            example: {
                input: "5",
                output: "120"
            },
            constraints: ["1 ≤ n ≤ 100", "Time limit: 1 second"],
            testCases: [
                { input: "5", expected: "120" },
                { input: "0", expected: "1" },
                { input: "7", expected: "5040" }
            ],
            solutions: {
                python: `def factorial(n):
    if n == 0 or n == 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

n = int(input())
print(factorial(n))`,
                javascript: `function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const n = parseInt(require('fs').readFileSync('/dev/stdin', 'utf8').trim());
console.log(factorial(n));`,
                java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(factorial(n));
    }
    
    public static long factorial(int n) {
        if (n == 0 || n == 1) return 1;
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}`,
                cpp: `#include <iostream>
using namespace std;

long long factorial(int n) {
    if (n == 0 || n == 1) return 1;
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}`,
                c: `#include <stdio.h>

long long factorial(int n) {
    if (n == 0 || n == 1) return 1;
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%lld\\n", factorial(n));
    return 0;
}`
            }
        },
        {
            id: 2,
            title: "Palindrome Checker",
            difficulty: "Easy",
            description: "Write a program to check if a given string is a palindrome. A palindrome is a string that reads the same backward as forward.",
            example: {
                input: "racecar",
                output: "true"
            },
            constraints: ["String length: 1 to 1000 characters", "Case-sensitive comparison"],
            testCases: [
                { input: "racecar", expected: "true" },
                { input: "hello", expected: "false" },
                { input: "madam", expected: "true" }
            ],
            solutions: {
                python: `s = input().strip()
if s == s[::-1]:
    print("true")
else:
    print("false")`,
                javascript: `const s = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(s === s.split('').reverse().join('') ? 'true' : 'false');`,
                java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().trim();
        String reversed = new StringBuilder(s).reverse().toString();
        System.out.println(s.equals(reversed) ? "true" : "false");
    }
}`,
                cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s;
    getline(cin, s);
    string reversed = s;
    reverse(reversed.begin(), reversed.end());
    cout << (s == reversed ? "true" : "false") << endl;
    return 0;
}`,
                c: `#include <stdio.h>
#include <string.h>

int main() {
    char s[1001];
    fgets(s, 1001, stdin);
    int len = strlen(s);
    if (len > 0 && s[len-1] == '\\n') s[len-1] = '\\0';
    len = strlen(s);
    
    int isPalindrome = 1;
    for (int i = 0; i < len/2; i++) {
        if (s[i] != s[len-1-i]) {
            isPalindrome = 0;
            break;
        }
    }
    printf("%s\\n", isPalindrome ? "true" : "false");
    return 0;
}`
            }
        },
        {
            id: 3,
            title: "Fibonacci Sequence",
            difficulty: "Medium",
            description: "Write a program to generate the first n numbers of the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.",
            example: {
                input: "7",
                output: "0 1 1 2 3 5 8"
            },
            constraints: ["1 ≤ n ≤ 50", "Time limit: 1 second"],
            testCases: [
                { input: "7", expected: "0 1 1 2 3 5 8" },
                { input: "1", expected: "0" },
                { input: "5", expected: "0 1 1 2 3" }
            ],
            solutions: {
                python: `n = int(input())
a, b = 0, 1
result = []
for _ in range(n):
    result.append(str(a))
    a, b = b, a + b
print(' '.join(result))`,
                javascript: `const n = parseInt(require('fs').readFileSync('/dev/stdin', 'utf8').trim());
let a = 0, b = 1;
const result = [];
for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
}
console.log(result.join(' '));`,
                java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long a = 0, b = 1;
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < n; i++) {
            result.append(a).append(i < n - 1 ? " " : "");
            long temp = a + b;
            a = b;
            b = temp;
        }
        System.out.println(result);
    }
}`,
                cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    long long a = 0, b = 1;
    for (int i = 0; i < n; i++) {
        cout << a << (i < n - 1 ? " " : "");
        long long temp = a + b;
        a = b;
        b = temp;
    }
    cout << endl;
    return 0;
}`,
                c: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    long long a = 0, b = 1;
    for (int i = 0; i < n; i++) {
        printf("%lld%s", a, i < n - 1 ? " " : "\\n");
        long long temp = a + b;
        a = b;
        b = temp;
    }
    return 0;
}`
            }
        },
        {
            id: 4,
            title: "Prime Number Checker",
            difficulty: "Medium",
            description: "Write a program to check if a given number is prime. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
            example: {
                input: "17",
                output: "true"
            },
            constraints: ["1 ≤ n ≤ 1000000", "Time limit: 1 second"],
            testCases: [
                { input: "17", expected: "true" },
                { input: "4", expected: "false" },
                { input: "2", expected: "true" }
            ],
            solutions: {
                python: `import math

def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    for i in range(5, int(math.sqrt(n)) + 1, 6):
        if n % i == 0 or n % (i + 2) == 0:
            return False
    return True

n = int(input())
print("true" if is_prime(n) else "false")`,
                javascript: `function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

const n = parseInt(require('fs').readFileSync('/dev/stdin', 'utf8').trim());
console.log(isPrime(n) ? 'true' : 'false');`,
                java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(isPrime(n) ? "true" : "false");
    }
    
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }
}`,
                cpp: `#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

int main() {
    int n;
    cin >> n;
    cout << (isPrime(n) ? "true" : "false") << endl;
    return 0;
}`,
                c: `#include <stdio.h>
#include <stdbool.h>
#include <math.h>

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%s\\n", isPrime(n) ? "true" : "false");
    return 0;
}`
            }
        },
        {
            id: 5,
            title: "Array Sum Calculator",
            difficulty: "Easy",
            description: "Write a program to calculate the sum of all elements in an array. The input will be a space-separated list of integers.",
            example: {
                input: "1 2 3 4 5",
                output: "15"
            },
            constraints: ["Array size: 1 to 1000 elements", "Each element: -1000 to 1000"],
            testCases: [
                { input: "1 2 3 4 5", expected: "15" },
                { input: "10", expected: "10" },
                { input: "-1 -2 -3", expected: "-6" }
            ],
            solutions: {
                python: `arr = list(map(int, input().split()))
print(sum(arr))`,
                javascript: `const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const arr = input.split(' ').map(Number);
console.log(arr.reduce((sum, num) => sum + num, 0));`,
                java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] parts = sc.nextLine().split(" ");
        int sum = 0;
        for (String part : parts) {
            sum += Integer.parseInt(part);
        }
        System.out.println(sum);
    }
}`,
                cpp: `#include <iostream>
#include <sstream>
#include <vector>
using namespace std;

int main() {
    string line;
    getline(cin, line);
    istringstream iss(line);
    int num, sum = 0;
    while (iss >> num) {
        sum += num;
    }
    cout << sum << endl;
    return 0;
}`,
                c: `#include <stdio.h>
#include <string.h>

int main() {
    char line[10000];
    fgets(line, 10000, stdin);
    
    int sum = 0, num;
    char *ptr = line;
    while (sscanf(ptr, "%d", &num) == 1) {
        sum += num;
        while (*ptr && *ptr != ' ') ptr++;
        while (*ptr == ' ') ptr++;
    }
    printf("%d\\n", sum);
    return 0;
}`
            }
        }
    ],
    
    // Initialize Focus Mode
    init() {
        console.log('=== INITIALIZING FOCUS MODE ===');
        this.problems = this.challenges;
        this.currentProblem = 0;
        this.setupEventListeners();
        this.loadProblem(0);
    },
    
    // Setup event listeners
    setupEventListeners() {
        // Run Code button
        document.getElementById('focus-run-btn')?.addEventListener('click', () => {
            this.runCode();
        });
        
        // Submit button
        document.getElementById('focus-submit-btn')?.addEventListener('click', () => {
            this.submitCode();
        });
        
        // View Solution button
        document.getElementById('focus-view-solution-btn')?.addEventListener('click', () => {
            this.toggleSolution();
        });
        
        // Exit button
        document.getElementById('focus-exit-btn')?.addEventListener('click', () => {
            this.exitFocusMode();
        });
        
        // Clear console button
        document.getElementById('focus-clear-console')?.addEventListener('click', () => {
            this.clearConsole();
        });
        
        // Language selector
        document.getElementById('focus-language-select')?.addEventListener('change', (e) => {
            this.selectedLanguage = e.target.value;
            this.updateEditorTemplate();
        });
        
        // Code editor - Tab support
        const codeEditor = document.getElementById('focus-code-editor');
        if (codeEditor) {
            codeEditor.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    const start = codeEditor.selectionStart;
                    const end = codeEditor.selectionEnd;
                    codeEditor.value = codeEditor.value.substring(0, start) + '    ' + codeEditor.value.substring(end);
                    codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
                }
            });
        }
    },
    
    // Load a specific problem
    loadProblem(index) {
        if (index < 0 || index >= this.problems.length) {
            console.error('Invalid problem index');
            return;
        }
        
        this.currentProblem = index;
        const problem = this.problems[index];
        
        // Update UI
        document.getElementById('focus-problem-title').textContent = problem.title;
        document.getElementById('focus-problem-difficulty').textContent = problem.difficulty;
        document.getElementById('focus-problem-desc').textContent = problem.description;
        document.getElementById('focus-example-input').textContent = problem.example.input;
        document.getElementById('focus-example-output').textContent = problem.example.output;
        document.getElementById('focus-progress').textContent = `Problem ${index + 1} of ${this.problems.length}`;
        
        // Update constraints
        const constraintsList = document.getElementById('focus-problem-constraints');
        constraintsList.innerHTML = '';
        problem.constraints.forEach(constraint => {
            const li = document.createElement('li');
            li.textContent = constraint;
            constraintsList.appendChild(li);
        });
        
        // Hide solution box
        document.getElementById('focus-solution-box').style.display = 'none';
        
        // Clear output
        this.clearConsole();
        
        // Update editor template
        this.updateEditorTemplate();
        
        // Update difficulty badge color
        const diffBadge = document.getElementById('focus-problem-difficulty');
        if (problem.difficulty === 'Easy') {
            diffBadge.style.background = 'rgba(0, 255, 136, 0.2)';
            diffBadge.style.borderColor = '#00ff88';
            diffBadge.style.color = '#00ff88';
        } else if (problem.difficulty === 'Medium') {
            diffBadge.style.background = 'rgba(255, 170, 0, 0.2)';
            diffBadge.style.borderColor = '#ffaa00';
            diffBadge.style.color = '#ffaa00';
        } else {
            diffBadge.style.background = 'rgba(255, 68, 68, 0.2)';
            diffBadge.style.borderColor = '#ff4444';
            diffBadge.style.color = '#ff4444';
        }
    },
    
    // Update editor template based on language
    updateEditorTemplate() {
        const problem = this.problems[this.currentProblem];
        const template = problem.solutions[this.selectedLanguage] || '// Write your code here';
        document.getElementById('focus-code-editor').value = '';
        document.getElementById('focus-language-select').value = this.selectedLanguage;
    },
    
    // Run code with sample input
    async runCode() {
        const code = document.getElementById('focus-code-editor').value.trim();
        if (!code) {
            this.showOutput('⚠️ Please write some code first!', 'warning');
            return;
        }
        
        const problem = this.problems[this.currentProblem];
        const sampleInput = problem.example.input;
        
        this.showOutput(`Running code with input: ${sampleInput}\n`, 'info');
        
        // Execute code using backend API
        try {
            const result = await this.executeCode(code, sampleInput);
            this.showOutput(`Output: ${result}\n`, 'success');
        } catch (error) {
            this.showOutput(`❌ Error: ${error.message}\n`, 'error');
        }
    },
    
    // Submit code for evaluation
    async submitCode() {
        const code = document.getElementById('focus-code-editor').value.trim();
        if (!code) {
            this.showOutput('⚠️ Please write some code first!', 'warning');
            return;
        }
        
        const problem = this.problems[this.currentProblem];
        
        // Use backend test execution if available
        if (this.useBackend) {
            try {
                this.showOutput('\n🧪 Running test cases...\n', 'info');
                
                const response = await fetch(`${this.API_BASE_URL}/execute/test`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        language: this.selectedLanguage,
                        code: code,
                        testCases: problem.testCases
                    })
                });
                
                const result = await response.json();
                
                // Display results
                this.showOutput('\n=== Test Results ===\n', 'info');
                this.showOutput(`Total: ${result.totalTests} | Passed: ${result.passedTests} | Failed: ${result.failedTests}\n`, 
                    result.success ? 'success' : 'warning');
                
                result.results.forEach(r => {
                    if (r.passed) {
                        this.showOutput(`✅ Test Case ${r.testCase}: PASSED`, 'success');
                    } else {
                        this.showOutput(`❌ Test Case ${r.testCase}: FAILED`, 'error');
                        this.showOutput(`   Expected: ${r.expected}`, 'warning');
                        this.showOutput(`   Got: ${r.actual || r.error}`, 'warning');
                    }
                });
                
                if (result.success) {
                    this.showOutput('\n🎉 All test cases passed! +20 XP awarded!', 'success');
                    State.addXP(20);
                    
                    // Move to next problem after delay
                    setTimeout(() => {
                        if (this.currentProblem < this.problems.length - 1) {
                            this.loadProblem(this.currentProblem + 1);
                            this.showOutput('\nLoading next problem...', 'info');
                        } else {
                            this.showOutput('\n🏆 Congratulations! You completed all challenges!', 'success');
                            setTimeout(() => this.exitFocusMode(), 2000);
                        }
                    }, 2000);
                } else {
                    this.showOutput('\n⚠️ Some test cases failed. Try again!', 'warning');
                }
                
                return;
            } catch (error) {
                console.error('Backend test execution failed, falling back to client-side:', error);
                // Fallback to client-side testing
            }
        }
        
        // Fallback: Client-side test execution
        let allPassed = true;
        let results = [];
        
        for (let i = 0; i < problem.testCases.length; i++) {
            const testCase = problem.testCases[i];
            try {
                const output = await this.executeCode(code, testCase.input);
                const passed = output.trim() === testCase.expected.trim();
                results.push({
                    testCase: i + 1,
                    passed: passed,
                    expected: testCase.expected,
                    actual: output.trim()
                });
                if (!passed) allPassed = false;
            } catch (error) {
                results.push({
                    testCase: i + 1,
                    passed: false,
                    expected: testCase.expected,
                    actual: `Error: ${error.message}`
                });
                allPassed = false;
            }
        }
        
        // Display results
        this.showOutput('\n=== Test Results ===\n', 'info');
        results.forEach(result => {
            if (result.passed) {
                this.showOutput(`✅ Test Case ${result.testCase}: PASSED`, 'success');
            } else {
                this.showOutput(`❌ Test Case ${result.testCase}: FAILED`, 'error');
                this.showOutput(`   Expected: ${result.expected}`, 'warning');
                this.showOutput(`   Got: ${result.actual}`, 'warning');
            }
        });
        
        if (allPassed) {
            this.showOutput('\n🎉 All test cases passed! +20 XP awarded!', 'success');
            State.addXP(20);
            
            // Move to next problem after delay
            setTimeout(() => {
                if (this.currentProblem < this.problems.length - 1) {
                    this.loadProblem(this.currentProblem + 1);
                    this.showOutput('\nLoading next problem...', 'info');
                } else {
                    this.showOutput('\n🏆 Congratulations! You completed all challenges!', 'success');
                    setTimeout(() => this.exitFocusMode(), 2000);
                }
            }, 2000);
        } else {
            this.showOutput('\n⚠️ Some test cases failed. Try again!', 'warning');
        }
    },
    
    // Execute code (using backend API)
    async executeCode(code, input) {
        if (this.useBackend) {
            try {
                const response = await fetch(`${this.API_BASE_URL}/execute`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        language: this.selectedLanguage,
                        code: code,
                        input: input
                    })
                });
                
                const result = await response.json();
                
                if (!result.success) {
                    throw new Error(result.error || 'Execution failed');
                }
                
                return result.output;
            } catch (error) {
                console.error('Backend execution failed, falling back to simulation:', error);
                // Fallback to client-side simulation if backend fails
                return this.simulateExecution(code, input);
            }
        } else {
            // Use client-side simulation
            return this.simulateExecution(code, input);
        }
    },
    
    // Legacy method - redirects to new executeCode
    executeCodeSync(code, input) {
        return this.simulateExecution(code, input);
    },
    
    // Simulate code execution (fallback when backend is unavailable)
    simulateExecution(code, input) {
        // Simple simulation for demo purposes
        // In production, use a real Python interpreter or backend service
        
        try {
            // Capture print statements
            let output = '';
            const mockPrint = (text) => {
                output += text + '\n';
            };
            
            // For factorial
            if (code.includes('factorial')) {
                const n = parseInt(input);
                let result = 1;
                for (let i = 2; i <= n; i++) {
                    result *= i;
                }
                return result.toString();
            }
            
            // For palindrome
            if (code.includes('palindrome') || (code.includes('[::-1]'))) {
                const s = input.trim();
                return s === s.split('').reverse().join('') ? 'true' : 'false';
            }
            
            // For fibonacci
            if (code.includes('fibonacci') || code.includes('a, b = 0, 1')) {
                const n = parseInt(input);
                let a = 0, b = 1;
                const result = [];
                for (let i = 0; i < n; i++) {
                    result.push(a);
                    [a, b] = [b, a + b];
                }
                return result.join(' ');
            }
            
            // For prime
            if (code.includes('is_prime') || code.includes('prime')) {
                const n = parseInt(input);
                if (n <= 1) return 'false';
                if (n <= 3) return 'true';
                if (n % 2 === 0 || n % 3 === 0) return 'false';
                for (let i = 5; i * i <= n; i += 6) {
                    if (n % i === 0 || n % (i + 2) === 0) return 'false';
                }
                return 'true';
            }
            
            // For array sum
            if (code.includes('sum(') || code.includes('.split()')) {
                const arr = input.split(' ').map(Number);
                return arr.reduce((sum, num) => sum + num, 0).toString();
            }
            
            return 'Output simulated';
        } catch (error) {
            throw new Error('Execution error: ' + error.message);
        }
    },
    
    // Simulate JavaScript execution
    simulateJavaScript(code, input) {
        try {
            // For factorial
            if (code.includes('factorial')) {
                const n = parseInt(input);
                let result = 1;
                for (let i = 2; i <= n; i++) {
                    result *= i;
                }
                return result.toString();
            }
            
            // For palindrome
            if (code.includes('reverse()')) {
                const s = input.trim();
                return s === s.split('').reverse().join('') ? 'true' : 'false';
            }
            
            // For fibonacci
            if (code.includes('[a, b] = [b, a + b]') || code.includes('let a = 0, b = 1')) {
                const n = parseInt(input);
                let a = 0, b = 1;
                const result = [];
                for (let i = 0; i < n; i++) {
                    result.push(a);
                    [a, b] = [b, a + b];
                }
                return result.join(' ');
            }
            
            // For prime
            if (code.includes('isPrime')) {
                const n = parseInt(input);
                if (n <= 1) return 'false';
                if (n <= 3) return 'true';
                if (n % 2 === 0 || n % 3 === 0) return 'false';
                for (let i = 5; i * i <= n; i += 6) {
                    if (n % i === 0 || n % (i + 2) === 0) return 'false';
                }
                return 'true';
            }
            
            // For array sum
            if (code.includes('.reduce(')) {
                const arr = input.split(' ').map(Number);
                return arr.reduce((sum, num) => sum + num, 0).toString();
            }
            
            return 'Output simulated';
        } catch (error) {
            throw new Error('Execution error: ' + error.message);
        }
    },
    
    // Simulate generic execution (C, C++, Java)
    simulateGeneric(code, input) {
        try {
            // For factorial
            if (code.includes('factorial')) {
                const n = parseInt(input);
                let result = 1;
                for (let i = 2; i <= n; i++) {
                    result *= i;
                }
                return result.toString();
            }
            
            // For palindrome
            if (code.includes('reverse')) {
                const s = input.trim();
                return s === s.split('').reverse().join('') ? 'true' : 'false';
            }
            
            // For fibonacci
            if (code.includes('a = 0, b = 1') || code.includes('long long a = 0')) {
                const n = parseInt(input);
                let a = 0, b = 1;
                const result = [];
                for (let i = 0; i < n; i++) {
                    result.push(a);
                    [a, b] = [b, a + b];
                }
                return result.join(' ');
            }
            
            // For prime
            if (code.includes('isPrime') || code.includes('is_prime')) {
                const n = parseInt(input);
                if (n <= 1) return 'false';
                if (n <= 3) return 'true';
                if (n % 2 === 0 || n % 3 === 0) return 'false';
                for (let i = 5; i * i <= n; i += 6) {
                    if (n % i === 0 || n % (i + 2) === 0) return 'false';
                }
                return 'true';
            }
            
            // For array sum
            if (code.includes('sum') || code.includes('Sum')) {
                const arr = input.split(' ').map(Number);
                return arr.reduce((sum, num) => sum + num, 0).toString();
            }
            
            return 'Output simulated';
        } catch (error) {
            throw new Error('Execution error: ' + error.message);
        }
    },
    
    // Show output in console
    showOutput(text, type = 'info') {
        const outputElement = document.getElementById('focus-output');
        const placeholder = outputElement.querySelector('.console-placeholder');
        if (placeholder) {
            placeholder.remove();
        }
        
        const span = document.createElement('span');
        span.className = `console-${type}`;
        span.textContent = text + '\n';
        outputElement.appendChild(span);
        
        // Auto-scroll to bottom
        outputElement.scrollTop = outputElement.scrollHeight;
    },
    
    // Clear console
    clearConsole() {
        const outputElement = document.getElementById('focus-output');
        outputElement.innerHTML = '<span class="console-placeholder">Click "Run Code" to see output...</span>';
    },
    
    // Toggle solution visibility
    toggleSolution() {
        const solutionBox = document.getElementById('focus-solution-box');
        const solutionCode = document.getElementById('focus-solution-code');
        
        if (solutionBox.style.display === 'none') {
            const problem = this.problems[this.currentProblem];
            solutionCode.textContent = problem.solutions[this.selectedLanguage];
            solutionBox.style.display = 'block';
        } else {
            solutionBox.style.display = 'none';
        }
    },
    
    // Exit Focus Mode
    exitFocusMode() {
        State.navigateTo('dashboard');
        State.initDashboard();
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FocusMode;
}
