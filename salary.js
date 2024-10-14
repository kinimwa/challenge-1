function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Calculate NSSF Deduction (Assuming NSSF rates for Tier I and Tier II)
    const nssfTier1 = 6000 * 0.06; // 6% of the first Ksh 6000
    const nssfTier2 = (grossSalary > 6000 ? Math.min(18000, grossSalary) - 6000 : 0) * 0.06; // 6% of the next Ksh 12000
    const nssfDeductions = nssfTier1 + nssfTier2;

    // Calculate NHIF Deduction (Based on the gross salary ranges)
    const nhifRates = [
        [5999, 150], [7999, 300], [11999, 400], [14999, 500], [19999, 600],
        [24999, 750], [29999, 850], [34999, 900], [39999, 950], [44999, 1000],
        [49999, 1100], [59999, 1200], [69999, 1300], [79999, 1400], [89999, 1500],
        [99999, 1600], [Infinity, 1700]
    ];

    let nhifDeductions = 0;
    for (let rate of nhifRates) {
        if (grossSalary <= rate[0]) {
            nhifDeductions = rate[1];
            break;
        }
    }

    // Calculate PAYE (Based on the 2021 rates)
    let taxableIncome = grossSalary - nssfDeductions;
    let paye = 0;

    const payeRates = [
        [24000, 0.1], [32333, 0.25], [Infinity, 0.3]
    ];

    for (let i = 0; i < payeRates.length; i++) {
        if (taxableIncome <= payeRates[i][0]) {
            paye += taxableIncome * payeRates[i][1];
            break;
        } else {
            paye += (payeRates[i][0] - (i > 0 ? payeRates[i-1][0] : 0)) * payeRates[i][1];
            taxableIncome -= payeRates[i][0] - (i > 0 ? payeRates[i-1][0] : 0);
        }
    }

    // Calculate Net Salary
    const netSalary = grossSalary - nssfDeductions - nhifDeductions - paye;

    console.log(`Gross Salary: Ksh ${grossSalary}`);
    console.log(`NSSF Deductions: Ksh ${nssfDeductions}`);
    console.log(`NHIF Deductions: Ksh ${nhifDeductions}`);
    console.log(`PAYE: Ksh ${paye}`);
    console.log(`Net Salary: Ksh ${netSalary}`);
}

// Example usage:
calculateNetSalary(50000, 10000); // Basic salary of 50,000 and benefits of 10,000
