function addBlock() {
    if (typeof window.Blockly === 'undefined' || typeof window.Blockly.Blocks === 'undefined') {
        console.warn("Blockly オブジェクトが見つかりません。");
        return;
    }

    // ここも増やす
    window.Blockly.Blocks['example'] = {
        init: function() {
            this.appendDummyInput().appendField("サンプル"); this.setPreviousStatement(true, null); this.setNextStatement(true, null); this.setColour(160);
        }
    };

    window.Blockly.Python['example'] = function(block) {
        const code = `print("Example")`;
        return code;
    };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "injectBlocklyBlock" && sender.tab && sender.tab.id) {
        
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            function: addBlock,
            world: "MAIN"
        })
        .then(() => console.log("Auto-injection of Blockly script succeeded."))
        .catch(error => console.error("Auto-injection failed:", error));

        return true; 
    }
});