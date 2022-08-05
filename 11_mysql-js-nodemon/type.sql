//criação de tabelas
//OBS.: para strings, sempre utilizar "string" para uso correto
CREATE TABLE pxvmol(
    p FLOAT(5),
    vmol FLOAT(5)
);


//inserção de novos dados
INSERT INTO pxvmol(p, vmol) VALUES(
    0.5,
    51.133
);

//listar todos os dados da tabela
SELECT * FROM pxvmol;

//listar dados específicos (apenas irá mostrar a linha em que p = 1 e depois todos os v >= 20.000)
SELECT * FROM pxvmol WHERE p = 1;
SELECT * FROM pxvmol WHERE vmol >= 20.000;

//deletando dados
DELETE FROM pxvmol WHERE p = 1;
DELETE FROM pxvmol WHERE vmol >= 20.000;

//atualizando dados
UPDATE pxvmol SET p = 2 WHERE p = 1;
UPDATE pxvmol SET p = 2 WHERE p = 1 && vmol = 27.513;




