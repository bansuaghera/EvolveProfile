import fs from 'fs';
import path from 'path';

const dir = 'public/images/applications';
const targetMap = [
    // Page 3 (Industries) - Mapping to extracted_3_...
    'pipe-and-steel.jpg',
    'chemical.jpg',
    'pharmaceutical.jpg',
    'metal-coil.jpg',
    'structural.jpg',
    'heavy-machinery.jpg',
    'billets-packing.jpg',
    'spacer-uses.jpg',
    'aircraft.jpg',
    // Spares
    'spare-1.jpg', 'spare-2.jpg',

    // Page 4/5 (Applications) - Mapping to extracted_4_... and 5_...
    'warehouse.jpg',
    'godown.jpg',
    'potato-flakes.jpg',
    'mountain-staircase.jpg',
    'plants-raised-beds.jpg',
    'agriculture.jpg',
    'marine.jpg',
    'garden-fencing.jpg',
    'road-fencing.jpg',
    'animal-boundary.jpg',
    'fencing.jpg',
    'garden-street.jpg',
    'retaining-walls.jpg',
    'benches.jpg',
    'table.jpg'
];

function getSortedFiles(prefix) {
    try {
        const files = fs.readdirSync(dir)
            .filter(f => f.startsWith(prefix) && f.endsWith('.jpg'))
            .sort((a, b) => {
                const numA = parseInt(a.split('_')[2]);
                const numB = parseInt(b.split('_')[2]);
                return numA - numB;
            });
        return files;
    } catch (e) {
        return [];
    }
}

const p3Files = getSortedFiles('extracted_3_');
const p4Files = getSortedFiles('extracted_4_');
const p5Files = getSortedFiles('extracted_5_');

const allSourceFiles = [...p3Files, ...p4Files, ...p5Files];

console.log(`Found ${allSourceFiles.length} extracted images.`);

allSourceFiles.forEach((file, index) => {
    if (index < targetMap.length) {
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, targetMap[index]);

        // Copy instead of rename to preserve originals in case of error
        fs.copyFileSync(oldPath, newPath);
        console.log(`Mapped ${file} -> ${targetMap[index]}`);
    }
});
