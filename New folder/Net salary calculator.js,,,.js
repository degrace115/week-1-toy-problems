function calculateNetSalary(basicSalary, benefits) {
    const taxRates = {
        0: 0, // 0-24,999
        25000: 0.1, // 25,000-39,999
        40000: 0.15, // 40,000-59,999
        60000: 0.2, // 60,000-79,999
        80000: 0.25, // 80,000-149,999
        150000: 0.3  // 150,000 and above
    };

    const nhifDeduction = 200; // Example value, consult current rates for accuracy
    const nssfDeduction = 400; // Example value, consult current rates for accuracy

    let grossSalary = basicSalary + benefits;
    let payeeTax = 0;

    for (let limit in taxRates) {
        if (grossSalary > limit) {
            payeeTax += (Math.min(grossSalary, limit) - limit) * taxRates[limit];
        }
    }

    let netSalary = grossSalary - (payeeTax + nhifDeduction + nssfDeduction);
    console.log(`Gross Salary: ${grossSalary}, Net Salary: ${netSalary}`);
}

// Example call
calculateNetSalary(50000, 10000); // Change values to test with different salaries and benefits
