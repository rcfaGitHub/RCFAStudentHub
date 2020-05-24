var currentQuestion = 0;

var questionArray = ["1. What are the 3 financial statements, and why do we need them?", 
"2. How do the 3 statements link together?", 
"3. What’s the most important financial statement?", 
"4. What if you could use only 2 statements to assess a company’s prospects – which ones would you use, and why?", 
"5. How might the financial statements of a company in the U.K. or Germany be different from those of a company based in the U.S.?"];

var answerArray = ["The 3 major financial statements are the Income Statement, Balance Sheet, and Cash Flow Statement. The Income Statement shows the company’s revenue, expenses, and taxes over a period and ends with Net Income, which represents the company’s after-tax profits. The Balance Sheet shows the company’s Assets – its resources – as well as how it paid for those resources – its Liabilities and Equity – at a specific point in time. Assets must equal Liabilities plus Equity. The Cash Flow Statement begins with Net Income, adjusts for non-cash items and changes in operating assets and liabilities (working capital), and then shows the company’s cash from Investing or Financing activities; the last lines show the net change in cash and the company’s ending cash balance. You need these statements because there is a big difference between a company’s Net Income and the cash it generates – the Income Statement alone doesn’t tell what its cash flow is. Remember the key valuation formula: Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate) The 3 financial statements let you estimate the “Cash Flow” part, which helps you value the company more accurately.", 
" Access the Rest of the IB Interview Guide 65 of 99 http://breakingintowallstreet.com To link the statements, make Net Income from the Income Statement the top line of the Cash Flow Statement. Then, adjust this Net Income number for any non-cash items such as Depreciation & Amortization. Next, reflect changes to operational Balance Sheet items such as Accounts Receivable, which may increase or decrease the company’s cash flow depending on how they’ve changed. This gets you to Cash Flow from Operations. Next, take into account investing and financing activities, which may increase or decrease cash flow, and sum up Cash Flow from Operations, Investing, and Financing to get the net change in cash at the bottom. Link Cash on the Balance Sheet to the ending Cash number on the CFS, and add Net Income to Retained Earnings within the Equity category on the Balance Sheet. Then, link each non-cash adjustment to the appropriate Asset or Liability; SUBTRACT links on the Assets side and ADD links on the L&E side. And then link each CFI and CFF item to the matching item on the Balance Sheet, using the same rule as above. Check that Assets equals Liabilities plus Equity at the end; if this is not true, you did something wrong and need to re-check your work.", 
"The Cash Flow Statement is the most important single statement because it tells you how much cash a company is generating. The Income Statement is misleading because it includes non-cash revenue and expenses and excludes cash spending such as Capital Expenditures.", 
"You would use the Income Statement and Balance Sheet because you can create the Cash Flow Statement from both of those (assuming there are “Beginning” and “Ending” Balance Sheets that correspond to the same period shown on the Income Statement). Access the Rest of the IB Interview Guide 66 of 99 http://breakingintowallstreet.com It would be MUCH harder to “construct” an Income Statement from the Balance Sheet and Cash Flow Statement (for example).", 
"Income Statements and Balance Sheets tend to be similar across different regions, but companies that use IFRS often start the Cash Flow Statement with something other than Net Income: Operating Income, Pre-Tax Income, or if they are using the Direct Method for creating the CFS, Cash Received or Cash Paid. There are also minor naming differences; for example, the Income Statement might be called the “Consolidated Statement of Earnings” or the “Profit & Loss Statement,” and the Balance Sheet might be called the “Statement of Financial Position.” Technically, U.S.-based companies that follow U.S. GAAP can also use the Direct Method for creating the CFS, but in practice, they tend to use the Indirect Method (i.e., they start with Net Income and make adjustments to determine the cash flow)."];

// Randomize the question number based on which questions types are chosen
function randomizeQuestion() {
    currentQuestion = Math.floor((Math.random() * 5) + 1);
    console.log(currentQuestion);

    var question = questionArray[currentQuestion - 1];
    document.querySelector("#question-box").innerHTML = question;

    document.querySelector("#answer-box").innerHTML = "";
    document.querySelector("#question-span").innerHTML = currentQuestion.toString();

}

// Goes to the next question in the list
function nextQuestion() {
    if (currentQuestion < 5) {
        currentQuestion++;
    } else {
        currentQuestion = 1;
    }
    var question = questionArray[currentQuestion - 1];
    document.querySelector("#question-box").innerHTML = question;

    document.querySelector("#answer-box").innerHTML = "";
    document.querySelector("#question-span").innerHTML = currentQuestion.toString();
}

// Goes to the next question in the list
function prevQuestion() {  
    if (currentQuestion > 1) {
        currentQuestion--;
    } else {
        currentQuestion = 5;
    }

    var question = questionArray[currentQuestion - 1];
    document.querySelector("#question-box").innerHTML = question;

    document.querySelector("#answer-box").innerHTML = "";
    document.querySelector("#question-span").innerHTML = currentQuestion.toString();
}

// Shows the answer to the question
function showAnswer() {
    var answer = answerArray[currentQuestion - 1];;
    document.querySelector("#answer-box").innerHTML = answer;
}







