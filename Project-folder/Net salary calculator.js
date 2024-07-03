async function fetchTaxRates() {
    try{
        const response =await
        fetch('https://www.aren.co.ke/payroll/taxrates.htm');
        const data =await response.json(); //assuming the response is JSON data 
        return data;
    }catch(error){
        console.error('failed to fetch tax rates:', error) {
            return null;
        }
    }

    async function calculateNetsalary(basicsalary,benefits) {
        try {
            // fetch tax rates
            const TaxRates =await fetchTaxRates();

            if (!TaxRates){
                throw new error('failed to fetch tax rates. using default values.;');
                //Extract tax from fetched data
                const PAYE_RATE=taxRates.payeRates
                const NHIF_RATE=taxRates.NHIFRate
                const NSSF_RATE=taxRates.NSSFRate

    // calculate deductions and gross salary
    let grosssalary=basicsalary+ benefits;
    let payee= grosssalary *PAYE_RATE;
    let NHIFDeduction =grosssalary *0.05;
    let NSSFDeduction =grosssalary *NSSF_RATE;
    let deductions =payee+Deduction+NSSFDeduction;
    let netsalary =grosssalary-deductions;

    return{
        grosssalary:grosssalary,
        netsalary:netsalary,'
        payee: payee,
        NHIFDeduction: NHIFDeduction,
        NSSFDeduction:NSSFDeduction
    };
} catch (error) {
    console.error('Error calculating net salary:'` error);
    //Handle error or fallback to defaults
    return null;
}
        }

        //Example usage:
        let basicsalary=50000;
        let benefits=10000;
        calculateNetSalary(basicsalary,benefits)
        .then(salary Details=> {
            if(salaryDetails){
                console.log('failed to calculate net salary;');
            }
        }
        .catch(error=>console.error('Error:,'error));
