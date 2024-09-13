/*   Key Features:
    Transaction Entry:

    Users can add transactions (income or expense) with details like amount, category, and date.
    Edit and delete transactions as needed.
    Expense Categories:

    Pre-defined categories (e.g., food, rent, entertainment), but users can add custom categories.
    Visualize spending per category.
    Overview and Statistics:

    Show a summary of income, expenses, and net savings.
    Generate graphs like pie charts or bar charts using a library like Chart.js to show how much users are spending in each category or month.
    Savings Goal:

    Users can set savings goals and track progress towards achieving them.
    Data Storage:

    Use LocalStorage or IndexedDB to store transactions, so they persist across sessions without the need for a back-end server.*/

class TransactionEntry{
    constructor (balance, income, expenses, date, amount ){
        this,income =  income
        this.balance = balance
        this.expenses = expenses
        this.date = date
        this.amount = amount
    }
}

const transaction = new TransactionEntry(1000000, 20000, 10000, "10.09.2024", 1000000);