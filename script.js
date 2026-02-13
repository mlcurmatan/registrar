function toggleSections() {
    // 1. Get references to inputs
    const isUG = document.getElementById('ug').checked;
    const isGrad = document.getElementById('grad').checked;
    
    // Departments and Sub-programs
    const ugDept = document.getElementById('ug_courses').value;
    const cbeProg = document.getElementById('cbe_programs_select').value;
    const gradType = document.getElementById('grad_type').value;

    // Helper function to handle display
    const setDisplay = (id, condition) => {
        const el = document.getElementById(id);
        if (el) el.style.display = condition ? 'block' : 'none';
    };

    // 2. Control Primary Sections
    setDisplay('ug_section', isUG);
    setDisplay('grad_section', isGrad);

    // 3. Control Undergraduate Sub-sections
    setDisplay('cea_sub_section', isUG && ugDept === 'CEA');
    setDisplay('CCS_sub_section', isUG && ugDept === 'CCS');
    setDisplay('CBE_sub_section', isUG && ugDept === 'CBE');
    setDisplay('COA_sub_section', isUG && ugDept === 'COA');

    // 4. Control Specialization (Only if BS Business Administration is selected)
    setDisplay('CBE_subs_section', isUG && ugDept === 'CBE' && cbeProg === 'ggg');

    // 5. Control Graduate Sub-sections
    setDisplay('doctorate_options', isGrad && gradType === 'doc');
    setDisplay('masters_options', isGrad && gradType === 'mas');
}