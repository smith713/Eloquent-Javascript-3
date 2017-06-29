# Eloquent-Javascript-3

<h1>Eloquent Javascript 3 - Functions</h1>
<h2>Minimum</h2>
        <p>Write a function min that takes two arguments and returns their minimum.</p>
<h2>Recursion</h2>
        <p>We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:</p>
        <ul>
            <li>Zero is even.</li><br/>
            <li>One is odd.</li><br/>
            <li>For any other number N, its evenness is the same as N - 2.</li>
        </ul>
        <p>Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.</p>
        <p>Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?</p>
        <strong><p>-1 is being recursively called and getting smaller and smaller and never becomes 0 or 1 (true or false). One way to fix the problem is to take the absolute value of the negative number.</p></strong>
        
<h2>Bean Counting</h2>
        <p>Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.</p>
        <p>Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.</p>
