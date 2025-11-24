function generateBlocklyCategory(labelText, color) {
    const toolsboxs = document.getElementById('toolbox');
    if (!toolsboxs) return;

    const category = document.createElement('category');
    category.setAttribute('colour', color);
    category.setAttribute('name', labelText)

    toolsboxs.appendChild(category);
    return category;
}

function generateBlocklyBlcok(category, labelText, type) {
    const block = document.createElement('block');
    block.setAttribute('type', type);
    block.textContent = labelText;
    category.appendChild(block);
}

function generateBlocklySeparator() {
    const toolsboxs = document.getElementById('toolbox');
    if (!toolsboxs) return;
    const sp = document.createElement('sep');

    toolsboxs.appendChild(sp);
}

window.onload = function() {
    generateBlocklySeparator();

    // 拡張機能のサンプル
    const example = generateBlocklyCategory('サンプル', '#241d1d');
    if (example) {
        // これを増やせばブロックを増やせる
        generateBlocklyBlcok(example, "サンプル", "example");
    }
    
    chrome.runtime.sendMessage({ action: "injectBlocklyBlock" });
};