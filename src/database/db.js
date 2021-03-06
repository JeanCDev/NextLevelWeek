// importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose();

//criar objeto de banco de dados
const db = new sqlite3.Database('./src/database/database.db');

// exportar o db
module.exports = db;

//utilizar o objt de database para as operações
/*db.serialize(() =>{
    // cria uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);

    //inserir dados na tabela
    const query = `
                INSERT INTO places (
                    image,
                    name,
                    address,
                    address2,
                    state, 
                    city,
                    items
                ) VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
    
    const values = [
        'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'PaperSider',
        'Guilherme Gemballa, Jardim América',
        'N° 260',
        'Santa Catarina',
        'Rio do Sul',
        'Resíduos Eletrônicos, Lâmpadas'
    ];

    function afterInsertData(err){
        if(err){
            return console.log(err);
        }

        console.log('Cadastrados com sucesso');
        console.log(this);
    };

    db.run(query, values, afterInsertData);

    //consutar dados na tabela
    db.all(`SELECT * FROM places`, function(err, rows){
            if(err){
                return console.log(err);
            }

            console.log('Aqui estão os registros');
            console.log(rows)
        });

    //deletar dados da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
        if(err){
            return console.log(err);
        }

        console.log('Registro deletado com sucesso');
    }); 
});*/