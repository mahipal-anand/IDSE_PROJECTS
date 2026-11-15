const fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.join(__dirname,'..');const html=fs.readFileSync(path.join(root,'index.html'),'utf8');const js=fs.readFileSync(path.join(root,'js/game.js'),'utf8');const css=fs.readFileSync(path.join(root,'css/style.css'),'utf8');
const tests=[
['HTML loads stylesheet and game script',html.includes('css/style.css')&&html.includes('js/game.js')],
['Seven chapters are present', (js.match(/title:'The /g)||[]).length===7],
['Four field puzzles per chapter', (js.match(/\['[A-Z][^\]]*?','/g)||[]).length>=28],
['Python terminal is gated behind four puzzles',js.includes('state.solved[state.chapter].length===4')&&js.includes('showCodeBrief')],
['Real Pyodide execution is included',js.includes('loadPyodide')&&js.includes('py.runPython')],
['Scientific packages load on demand',js.includes('py.loadPackage(packages)')],
['Progress persists locally',js.includes('localStorage.setItem')&&js.includes('lastDatasetSeven')],
['Seven-chapter map locks later wings',js.includes('state.codeDone[i-1]')],
['Reduced-motion support exists',css.includes('prefers-reduced-motion')],
['Responsive layout exists',css.includes('@media(max-width:600px)')],
['Story, theory, interactive demo and final understanding check exist',js.includes('function lessonStage(stage)')&&js.includes('function lessonCopy')&&js.includes('INTERACTIVE FIELD LAB')&&js.includes('UNDERSTANDING CHECK')],
['All seven chapters have concept teaching sequences',js.includes('const bank=[')&&js.includes('K-means assigns each point')&&js.includes('Pandas reads tabular data')],
['Learning console preserves the game world',css.includes('place-items:stretch end')&&css.includes('drawerIn')],
['Terminal remains a physical in-world interaction',js.includes("id:'objectC'")&&js.includes('renderCode()')],
['No permanent central code editor',!html.includes('id="codeEditor"')]
];let failed=0;for(const [name,ok] of tests){console.log(`${ok?'PASS':'FAIL'} ${name}`);if(!ok)failed++}console.log(`${tests.length-failed}/${tests.length} checks passed`);if(failed)process.exit(1);
