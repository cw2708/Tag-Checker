# Tag Checker

## Description
This program checks if the tags in a paragraph are properly nested and matched.

## How to Run Program

1. Ensure you have Node.js and npm installed.
2. Clone the repository.
   ```sh
   git clone https://github.com/cw2708/Tag-Checker.git
   cd Tag-Checker
3. Install TypeScript and the necessary dependencies.
    npm install
4. Compile the TypeScript code.
    npx tsc tagChecker.ts
5. Run the compiled JavaScript file.
    node tagChecker.js  

    Input Example:
    "The following text <C><B>is centered and in boldface</B></C>",
    "<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d> sentence",
    "<B><C>This should be centered and in boldface, but the tags are wrongly nested</B></C>",
    "<B>This should be in boldface, but there is an extra closing tag</B></C>",
    "<B><C>This should be centered and in boldface, but there is a missing closing tag</C>"

    Output Expected:
    "Correctly tagged paragraph",
    "Correctly tagged paragraph",
    "Expected </C> found </B>",
    "Expected # found </C>",
    "Expected </B> found #",
    
6. Query Problems
    If their are any problems reach out to me at:
    cwnz2004@gmail.com
