// tagChecker.ts
class TagChecker {
    static checkTags(paragraph: string): string {
        return "";
    }
}

// Input 
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