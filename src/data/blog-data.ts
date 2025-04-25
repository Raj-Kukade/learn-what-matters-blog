
import { BlogPost, Tag } from "../types/blog";

export const tags: Tag[] = [
  { id: "1", name: "DSA", slug: "dsa" },
  { id: "2", name: "Interview Questions", slug: "interview-questions" },
  { id: "3", name: "Frontend", slug: "frontend" },
  { id: "4", name: "Java", slug: "java" },
  { id: "5", name: "Python", slug: "python" },
  { id: "6", name: "System Design", slug: "system-design" },
  { id: "7", name: "Career", slug: "career" },
  { id: "8", name: "Algorithms", slug: "algorithms" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Master the Two-Pointer Technique for Coding Interviews",
    slug: "master-two-pointer-technique",
    description: "Learn how to effectively use the two-pointer approach to solve array and string problems in O(n) time complexity.",
    content: `
      # Master the Two-Pointer Technique
      
      The two-pointer technique is a pattern where two pointers iterate through a data structure in tandem or in opposite directions to solve a problem efficiently.
      
      ## When to use it?
      
      - When dealing with sorted arrays and you need to find a pair of elements
      - When dealing with slow and fast pointers in linked lists
      - When processing arrays from both ends simultaneously
      
      ## Common Problems
      
      ### 1. Find a pair with a given sum in a sorted array
      
      \`\`\`javascript
      function findPair(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        
        while (left < right) {
          const sum = arr[left] + arr[right];
          
          if (sum === target) {
            return [left, right];
          }
          
          if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
        
        return [-1, -1];
      }
      \`\`\`
      
      ### 2. Remove duplicates from a sorted array
      
      \`\`\`javascript
      function removeDuplicates(arr) {
        if (arr.length === 0) return 0;
        
        let i = 0;
        
        for (let j = 1; j < arr.length; j++) {
          if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
          }
        }
        
        return i + 1;
      }
      \`\`\`

      ## Practice Problems
      
      1. [Leetcode 167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
      2. [Leetcode 15. 3Sum](https://leetcode.com/problems/3sum/)
      3. [Leetcode 11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
      4. [Leetcode 42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
    `,
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["DSA", "Algorithms", "Interview Questions"],
    publishedAt: "2025-04-22T10:00:00Z",
    readTime: 8
  },
  {
    id: "2",
    title: "Complete Guide to Dynamic Programming for Interviews",
    slug: "complete-guide-dynamic-programming",
    description: "Master dynamic programming techniques with step-by-step examples to solve complex optimization problems in interviews.",
    content: `
      # Complete Guide to Dynamic Programming
      
      Dynamic Programming (DP) is a technique used to solve complex problems by breaking them down into simpler subproblems. It's particularly useful for optimization problems.
      
      ## Key Concepts
      
      1. **Overlapping Subproblems**: The problem can be broken down into subproblems which are reused multiple times
      2. **Optimal Substructure**: An optimal solution to the problem contains optimal solutions to its subproblems
      
      ## Approaches
      
      ### 1. Memoization (Top-Down)
      
      \`\`\`javascript
      function fibonacci(n, memo = {}) {
        if (n in memo) return memo[n];
        if (n <= 2) return 1;
        
        memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
        return memo[n];
      }
      \`\`\`
      
      ### 2. Tabulation (Bottom-Up)
      
      \`\`\`javascript
      function fibonacci(n) {
        const table = Array(n + 1).fill(0);
        table[1] = 1;
        
        for (let i = 2; i <= n; i++) {
          table[i] = table[i - 1] + table[i - 2];
        }
        
        return table[n];
      }
      \`\`\`
      
      ## Classic DP Problems
      
      1. **Longest Common Subsequence**
      2. **Knapsack Problem**
      3. **Matrix Chain Multiplication**
      4. **Longest Increasing Subsequence**
      
      ## Practice Problems
      
      1. [Leetcode 70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
      2. [Leetcode 300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
      3. [Leetcode 1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
      4. [Leetcode 322. Coin Change](https://leetcode.com/problems/coin-change/)
    `,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["DSA", "Algorithms", "Interview Questions"],
    publishedAt: "2025-04-20T09:30:00Z",
    readTime: 12
  },
  {
    id: "3",
    title: "System Design Interview: Designing a URL Shortener",
    slug: "system-design-url-shortener",
    description: "A comprehensive approach to tackling the popular URL shortener system design interview question step by step.",
    content: `
      # System Design: URL Shortener
      
      Designing a URL shortener like TinyURL or bit.ly is a common system design interview question. Here's a comprehensive approach to tackle it.
      
      ## 1. Requirement Clarification
      
      ### Functional Requirements
      - Shorten a given URL
      - Redirect users to the original URL
      - Custom and random links
      - Analytics tracking
      
      ### Non-functional Requirements
      - High availability
      - Real-time redirection
      - Minimal latency
      - Scalable
      
      ## 2. Capacity Estimation
      
      Assumptions:
      - 100 million URLs generated per month
      - Read to write ratio: 100:1
      - Each URL stored for 5 years
      
      Storage:
      - Each entry ~500 bytes
      - 100 million × 500 bytes × 60 months = 3 TB storage
      
      ## 3. System API
      
      \`\`\`
      createShortURL(api_dev_key, original_url, custom_alias=None, user_name=None, expire_date=None)
      
      getShortURL(api_dev_key, short_url)
      \`\`\`
      
      ## 4. Database Schema
      
      ### URL Table
      - id: PK
      - original_url
      - short_key
      - creation_date
      - expiration_date
      - user_id
      
      ## 5. Basic Design
      
      Components:
      - Application servers
      - Database servers
      - Cache
      
      ## 6. Encoding Algorithm
      
      Options:
      - Hash-based: MD5 or SHA256
      - Counter-based with base62 encoding
      
      ## 7. Detailed Design
      
      ### URL Shortening
      1. Check if URL already exists
      2. If not, generate a new short key
      3. Save to database
      4. Return the short URL
      
      ### URL Redirection
      1. Find the original URL from the short key
      2. If found, redirect
      3. If not found, return an error
      
      ## 8. Data Partitioning
      
      - Range-based
      - Hash-based
      
      ## 9. Cache
      
      - LRU cache for frequently accessed URLs
      - Cache size: 20% of daily traffic
      
      ## 10. Load Balancer
      
      - Between clients and application servers
      - Between application servers and database servers
      
      ## 11. Monitoring and Analytics
      
      - Track URL hits
      - Geographic distribution
      - Browser/device statistics
      
      ## 12. Security Considerations
      
      - Rate limiting
      - Private URLs
      - Spam detection
    `,
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["System Design", "Interview Questions"],
    publishedAt: "2025-04-18T14:15:00Z",
    readTime: 10
  },
  {
    id: "4",
    title: "Top Java Interview Questions for 2025",
    slug: "top-java-interview-questions-2025",
    description: "Prepare for your Java interviews with these most frequently asked questions and detailed answers.",
    content: `
      # Top Java Interview Questions for 2025
      
      ## Object-Oriented Programming
      
      ### Q: Explain the four main OOP concepts in Java
      
      **Answer:** Java implements these four main OOP concepts:
      
      1. **Encapsulation:** Bundling data and methods that operate on the data within one unit (class) and restricting direct access to some of the object's components.
      
      2. **Inheritance:** The mechanism by which one class acquires the properties and behaviors of another class.
      
      3. **Polymorphism:** The ability of different objects to respond to the same method call in different ways. Achieved through method overloading and overriding.
      
      4. **Abstraction:** Hiding implementation details and showing only functionality to the user.
      
      ### Q: What's the difference between an interface and an abstract class?
      
      **Answer:**
      
      - **Abstract Class:**
        - Can have abstract and non-abstract methods
        - Can have instance variables
        - Can have constructors
        - A class can extend only one abstract class
        - Can have access modifiers
      
      - **Interface:**
        - All methods are implicitly abstract (before Java 8)
        - Can only have static and final variables
        - No constructors
        - A class can implement multiple interfaces
        - All methods are implicitly public
      
      ## Java Collections
      
      ### Q: Explain the difference between ArrayList and LinkedList
      
      **Answer:**
      
      - **ArrayList:**
        - Implemented as a resizable array
        - Fast random access (O(1))
        - Slow insertion/deletion in the middle (O(n))
        - Better for storing and accessing data
      
      - **LinkedList:**
        - Implemented as a doubly linked list
        - Slow random access (O(n))
        - Fast insertion/deletion in the middle (O(1))
        - Better for manipulating data
      
      ### Q: What is the difference between HashMap and HashTable?
      
      **Answer:**
      
      - **HashMap:**
        - Not synchronized (not thread-safe)
        - Allows one null key and multiple null values
        - Faster than HashTable
      
      - **HashTable:**
        - Synchronized (thread-safe)
        - Does not allow null keys or values
        - Slower than HashMap
      
      ## Java 8+ Features
      
      ### Q: Explain Lambda Expressions
      
      **Answer:** Lambda expressions are anonymous functions introduced in Java 8. They allow you to treat functionality as a method argument, or to create a function without belonging to any class.
      
      Example:
      
      \`\`\`java
      // Old way
      Collections.sort(list, new Comparator<String>() {
          @Override
          public int compare(String o1, String o2) {
              return o1.compareTo(o2);
          }
      });
      
      // With lambda
      Collections.sort(list, (s1, s2) -> s1.compareTo(s2));
      \`\`\`
      
      ### Q: What are the benefits of the Stream API?
      
      **Answer:** Stream API provides a functional approach to process collections of objects:
      
      - Functional programming style
      - Parallel execution support
      - Pipelining operations
      - Lazy evaluation
      - Reduced boilerplate code
      
      Example:
      
      \`\`\`java
      List<String> result = people.stream()
          .filter(p -> p.getAge() > 18)
          .map(Person::getName)
          .limit(10)
          .collect(Collectors.toList());
      \`\`\`
    `,
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Java", "Interview Questions"],
    publishedAt: "2025-04-15T08:45:00Z",
    readTime: 15
  },
  {
    id: "5",
    title: "Frontend Interview Preparation: React and Modern JavaScript",
    slug: "frontend-interview-preparation",
    description: "Comprehensive guide to prepare for frontend developer interviews focusing on React, JavaScript, and modern web technologies.",
    content: `
      # Frontend Interview Preparation
      
      ## JavaScript Fundamentals
      
      ### 1. Closures
      
      A closure is the combination of a function and the lexical environment within which that function was declared.
      
      \`\`\`javascript
      function createCounter() {
        let count = 0;
        return function() {
          return ++count;
        };
      }
      
      const counter = createCounter();
      console.log(counter()); // 1
      console.log(counter()); // 2
      \`\`\`
      
      ### 2. Prototypal Inheritance
      
      JavaScript objects have a prototype link to another object, and they inherit properties from that prototype.
      
      \`\`\`javascript
      function Person(name) {
        this.name = name;
      }
      
      Person.prototype.greet = function() {
        return \`Hello, I'm \${this.name}\`;
      };
      
      const alice = new Person('Alice');
      console.log(alice.greet()); // "Hello, I'm Alice"
      \`\`\`
      
      ### 3. Event Loop
      
      The event loop is how JavaScript handles asynchronous operations despite being single-threaded.
      
      \`\`\`javascript
      console.log('Start');
      
      setTimeout(() => {
        console.log('Timeout');
      }, 0);
      
      Promise.resolve().then(() => {
        console.log('Promise');
      });
      
      console.log('End');
      
      // Output:
      // Start
      // End
      // Promise
      // Timeout
      \`\`\`
      
      ## React Core Concepts
      
      ### 1. What is React?
      
      React is a JavaScript library for building user interfaces, particularly single-page applications where UI updates are frequent.
      
      ### 2. Virtual DOM
      
      The Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to determine what changes need to be made to the real DOM.
      
      ### 3. Components and Props
      
      Components are the building blocks of React applications. Props are inputs that components receive.
      
      \`\`\`jsx
      function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
      }
      
      // Usage
      <Greeting name="Alice" />
      \`\`\`
      
      ### 4. State and Lifecycle
      
      State allows React components to change their output over time in response to user actions, network responses, and other events.
      
      \`\`\`jsx
      import React, { useState, useEffect } from 'react';
      
      function Timer() {
        const [seconds, setSeconds] = useState(0);
        
        useEffect(() => {
          const timer = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
          }, 1000);
          
          return () => clearInterval(timer);
        }, []);
        
        return <div>Seconds: {seconds}</div>;
      }
      \`\`\`
      
      ## React Hooks
      
      ### 1. useState
      
      \`\`\`jsx
      const [state, setState] = useState(initialState);
      \`\`\`
      
      ### 2. useEffect
      
      \`\`\`jsx
      useEffect(() => {
        // Side effects
        return () => {
          // Cleanup
        };
      }, [dependencies]);
      \`\`\`
      
      ### 3. useContext
      
      \`\`\`jsx
      const value = useContext(MyContext);
      \`\`\`
      
      ### 4. useReducer
      
      \`\`\`jsx
      const [state, dispatch] = useReducer(reducer, initialState);
      \`\`\`
      
      ## Common Interview Questions
      
      1. **What is the difference between state and props?**
      2. **Explain the component lifecycle in React.**
      3. **What are controlled and uncontrolled components?**
      4. **How does React handle routing?**
      5. **What is Redux and when would you use it?**
      6. **Explain how virtual DOM works.**
      7. **What are React Hooks and why were they introduced?**
      8. **How would you optimize a React application's performance?**
      9. **What is the significance of keys in React lists?**
      10. **Explain the concept of lifting state up in React.**
      
      ## Coding Challenges
      
      1. Build a simple counter component
      2. Create a todo list with CRUD operations
      3. Implement a search filter for a list of items
      4. Build a form with validation
      5. Create a custom hook for data fetching
    `,
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    tags: ["Frontend", "Interview Questions", "Career"],
    publishedAt: "2025-04-10T11:20:00Z",
    readTime: 18
  },
  {
    id: "6",
    title: "Ultimate DSA Roadmap for Coding Interviews",
    slug: "ultimate-dsa-roadmap",
    description: "A step-by-step roadmap to prepare Data Structures and Algorithms for technical interviews at top tech companies.",
    content: `
      # Ultimate DSA Roadmap for Coding Interviews
      
      This comprehensive roadmap will guide you through your Data Structures and Algorithms preparation for coding interviews at top tech companies.
      
      ## Month 1: Basic Data Structures
      
      ### Week 1-2: Arrays & Strings
      - Arrays: Operations, traversal, manipulation
      - Strings: Common operations, pattern matching
      - Practice: 20 problems on LeetCode Easy-Medium level
      
      ### Week 3-4: Linked Lists, Stacks & Queues
      - Singly and Doubly Linked Lists
      - Stacks: Implementation, applications
      - Queues and Deques
      - Practice: 20 problems covering these structures
      
      ## Month 2: Advanced Data Structures
      
      ### Week 1-2: Trees
      - Binary Trees, Binary Search Trees
      - Tree traversals (in-order, pre-order, post-order)
      - Balanced trees (AVL, Red-Black)
      - Tries
      - Practice: 25 tree problems
      
      ### Week 3-4: Graphs & Heaps
      - Graph representations
      - Graph traversals (BFS, DFS)
      - Shortest path algorithms
      - Min/Max Heaps
      - Priority Queue
      - Practice: 25 problems on graphs and heaps
      
      ## Month 3: Algorithms
      
      ### Week 1-2: Searching and Sorting
      - Binary Search and its variations
      - Sorting algorithms: Quick Sort, Merge Sort, Heap Sort
      - Time and space complexity analysis
      - Practice: 20 problems
      
      ### Week 3-4: Dynamic Programming
      - Understanding overlapping subproblems and optimal substructure
      - Top-down and bottom-up approaches
      - Common DP patterns
      - Practice: 30 DP problems from easy to hard
      
      ## Month 4: Advanced Topics
      
      ### Week 1-2: Greedy Algorithms & Divide and Conquer
      - Greedy algorithm principles
      - Common greedy problems
      - Divide and conquer techniques
      - Practice: 20 problems
      
      ### Week 3-4: Advanced Techniques
      - Bit Manipulation
      - Two Pointers technique
      - Sliding Window
      - Backtracking
      - Practice: 25 mixed problems
      
      ## Month 5: Real Interview Preparation
      
      ### Week 1-2: Mock Interviews
      - Daily practice on LeetCode/HackerRank
      - Mock interviews with peers
      - Time yourself (typical interview: 45 minutes)
      
      ### Week 3-4: Company-Specific Preparation
      - Research common interview questions for target companies
      - Focus on weak areas from previous mocks
      - System design basics (if applicable)
      
      ## Resources
      
      ### Books
      - "Cracking the Coding Interview" by Gayle Laakmann McDowell
      - "Elements of Programming Interviews" by Adnan Aziz, Tsung-Hsien Lee, and Amit Prakash
      - "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein
      
      ### Online Platforms
      - LeetCode
      - HackerRank
      - GeeksforGeeks
      - InterviewBit
      
      ### YouTube Channels
      - Back To Back SWE
      - Tushar Roy - Coding Made Simple
      - Abdul Bari
      - CS Dojo
      
      ## Important Tips
      
      1. **Consistency is key**: Solve problems daily
      2. **Understand, don't memorize**: Focus on patterns and approaches
      3. **Mock interviews**: Practice explaining your thought process
      4. **Time management**: Learn to solve problems within the time constraint
      5. **Review**: Keep revisiting problems you've solved to reinforce concepts
      
      Remember, the goal is not just to solve problems but to develop a problem-solving mindset that you can apply to any new challenge.
    `,
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["DSA", "Career", "Algorithms"],
    publishedAt: "2025-04-05T15:30:00Z",
    readTime: 20
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentPostId: string, tags: string[], limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.tags.some(tag => tags.includes(tag)))
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};
