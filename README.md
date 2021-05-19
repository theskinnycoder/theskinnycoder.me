## **A. Comments :**

```
<!-- This is a comment -->
```

**Output :** _You can't see a comment's output, boomer!_

## **B. Normal Text :**

`This is normal text.`

**Output :** This is normal text.

## **C. Horizontal Rules :**

To draw a hortizontal rule, use 3 hyphens (---).

`---`

**Output :**

---

## **D. Headings :**

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

**Output :**

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> After the 1st type heading, (at times the 2nd type too) a horizontal rule will be drawn.

## **E. Text Formatting :**

### **1. Italics :**

```
_Italic Text should be wrapped with single underscores_
*Italic Text can also be wrapped with single asterisks*
```

**Output :**

_Italic Text should be wrapped with single underscores_

_Italic Text can also be wrapped with single asterisks_

### **2. Bold Text :**

```
**Bold Text should be wrapped with double asterisks**
__Bold Text can also be wrapped with double underscores__
```

**Output :**

**Bold Text should be wrapped with double asterisks**

**Bold Text can also be wrapped with double underscores**

> Use asterisks for strong text and underscores for italics, for better and clean code.

### **3. Strike-Through Text :**

```
~~Strike-Through Text should be wrapped with double tildes~~
```

**Output :**

~~Strike-Through Text should be wrapped with double tildes~~

### **4. Block-Quotes :**

```
> A Block-Quote should start with a greater than sign (>)
```

**Output :**

> A Block-Quote should start with a greater than sign (>)

## **F. Lists :**

### **1. Unordered Lists :**

Unordered lists can be formed using asterisks(\*).

```
* Item 1
* Item 2
* Item 3
	* Nested Item 1
	* Nested Item 2
```

**Output :**

- Item 1
- Item 2
- Item 3
  - Nested Item 1
  - Nested Item 2

### **2. Ordered Lists :**

Ordered lists can be formed using numbers.

```
1. Item 1
2. Item 2
3. Item 3
    1. Nested Item 1
    2. Nested Item 2
```

**Output :**

1. Item 1
2. Item 2
3. Item 3
   1. Nested Item 1
   2. Nested Item 2

## **G. Code :**

### **1. Inline Code :**

For inline code, we wrap the code in back-ticks, like this : **`git commit -m "Initial Commit"`** or like this : **`echo "Hello, World!"`**

### **2. Code-Blocks :**

- We wrap the code-blocks with three back-ticks(```).

- By default, these are **NOT** syntax highlighted.

```
class MainClass {
    public static void main(String args[]) {
        System.out.println("Hello, World!");
    }
}
```

- To get syntax-highlighting, we can specify the name of the language after the first 3 back-ticks.

```javascript
const add = (num1, num2) => num1 + num2

if (add(1, 2)) console.log("The sum is a number")
else console.log("The sum is zero")
```

- Some Other Examples :

```python
#!/usr/bin/python

def add(num1,  num2):
    return num1 + num2
```

```bash
#!/usr/bin/bash

npm i -D lodash
npm run build
```

```diff
- import React, { Component } from 'react';
+ import { useEffect, useState } from 'react';

const App = () => {
  // Some lines of code
}

export default App;
```

## **G. Images**

**1. Syntax : `![display_name](path "alternate_text")`**

**2. Example :**

```
![Me](https://avatars.githubusercontent.com/u/64031854?v=4 "TheSkinnyCoder")
```

**3. Output :**

![Me](https://avatars.githubusercontent.com/u/64031854?v=4 "TheSkinnyCoder")

- **`path`** can be local or external.
- Hover over the image to see the alternate text.
- Notice the space between the image's path and the alternate text.

## **H. Links :**

**1. Syntax : `[display_name](url "link_text")`**

**2. Example :**

```
[theskinnycoder.com](theskinnycoder.com "TheSkinnyCoder")
```

**3. Output :**

[theskinnycoder.com](https://theskinnycoder.com "TheSkinnyCoder")

- Hover over the link to see the link text.
- Notice the space between the link's URL and the alternate text.

> **NOTE : There is an exclamation mark before images, unlike links. That's the only difference**

## **I. Tables :**

| Name     | Email          |
| -------- | -------------- |
| John Doe | john@gmail.com |
| Jane Doe | jane@gmail.com |

## **J. Task-Lists :**

Same as lists, but we put an 'x' in between the brackets, i.e., `[]`, to check the box in, and leave a space( ), to check-out the box.

- [x] Task 1
- [x] Task 2
- [ ] Task 3
