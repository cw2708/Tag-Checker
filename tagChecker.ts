// tagChecker.ts
class TagChecker {
    static checkTags(paragraph: string): string {   const tagPattern = /<\/?[A-Za-z][\w:-]*>/g;
        const tags = paragraph.match(tagPattern);
        
        if (!tags) {
            return "Correctly tagged paragraph";
        }

        const stack: string[] = [];


        for (let i = 0; i < tags.length; i++) {
            const currentTag = tags[i];
            let isClosingTag = false;

            if (currentTag[1] === '/') {
                isClosingTag = true;
                const tagName = currentTag.slice(2, -1);
                const expectedTag = `</${tagName}>`;
                if (stack.length === 0 || stack[stack.length - 1] !== expectedTag) {
                    return `Expected ${expectedTag} found ${currentTag}`;
                }
                stack.pop();
            } else {
                const tagName = currentTag.slice(1, -1);
                const openingTag = `<${tagName}>`;
                stack.push(openingTag);
            }
        }

        if (stack.length > 0) {
            const lastTag = stack.pop();
            if (!lastTag) {
                return "Unexpected empty stack";
            }
            const tagName = lastTag.slice(1, -1);
            return `Expected </${tagName}> found #`;
        }

        return "Correctly tagged paragraph";
    }
}


// Input Example
const paragraphs = [
    "The following text <C><B>is centered and in boldface</B></C>",
    "<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d> sentence",
    "<B><C>This should be centered and in boldface, but the tags are wrongly nested</B></C>",
    "<B>This should be in boldface, but there is an extra closing tag</B></C>",
    "<B><C>This should be centered and in boldface, but there is a missing closing tag</C>"
];

for (const paragraph of paragraphs) {
    console.log(TagChecker.checkTags(paragraph));
}