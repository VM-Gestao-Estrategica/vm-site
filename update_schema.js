const fs = require('fs');
const path = 'C:\\Users\\redacao-01\\.gemini\\antigravity\\brain\\1e6fbdba-ce5d-4c4c-9163-16792a28cdae\\.system_generated\\steps\\107\\output.txt';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
const untreated = data.result.split('\n<untrusted-data-d56d5d96-8525-499c-b81b-54e7ee224eb2>\n')[1].split('\n</untrusted-data-d56d5d96-8525-499c-b81b-54e7ee224eb2>')[0];
const rows = JSON.parse(untreated);

let md = '| table_schema | table_name | column_name | data_type | is_nullable | constraint_type | referenced_schema | referenced_table | referenced_column |\n';
md += '| ------------ | ---------- | ----------- | --------- | ----------- | --------------- | ----------------- | ---------------- | ----------------- |\n';

rows.forEach(row => {
    md += `| ${row.table_schema || 'null'} | ${row.table_name || 'null'} | ${row.column_name || 'null'} | ${row.data_type || 'null'} | ${row.is_nullable || 'null'} | ${row.constraint_type || 'null'} | ${row.referenced_schema || 'null'} | ${row.referenced_table || 'null'} | ${row.referenced_column || 'null'} |\n`;
});

fs.writeFileSync('C:\\Users\\redacao-01\\OneDrive\\Documentos\\VM-GESTAO-ESTRATEGICA\\vm-site\\squemas.md', md);
console.log('File updated successfully');
