import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function SalaryTable({ cargos }) {
  const [search, setSearch] = useState('');
  const [selectedCargo, setSelectedCargo] = useState(null);
  const visibleCargos = cargos.filter(({ cargo }) =>
    cargo.toLocaleLowerCase('pt-BR').includes(search.trim().toLocaleLowerCase('pt-BR')),
  );

  return (
    <>
      <Form.Group className="mb-3" controlId="busca-cargo">
        <Form.Label>Buscar cargo</Form.Label>
        <Form.Control
          type="search"
          placeholder="Digite o nome do cargo"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Form.Group>

      <Table bordered hover responsive striped className="align-middle">
        <thead>
          <tr>
            <th scope="col">Cargo</th>
            <th scope="col">Nível</th>
            <th scope="col">Piso (exemplo)</th>
            <th scope="col">Reajuste (exemplo)</th>
            <th scope="col">Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {visibleCargos.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.cargo}</th>
              <td>{item.nivel}</td>
              <td>{money.format(item.piso)}</td>
              <td>{item.reajuste}</td>
              <td>
                <Button variant="outline-danger" size="sm" onClick={() => setSelectedCargo(item)}>
                  Ver detalhes / carga horária
                </Button>
              </td>
            </tr>
          ))}
          {visibleCargos.length === 0 && (
            <tr><td colSpan={5} className="text-center">Nenhum cargo encontrado.</td></tr>
          )}
        </tbody>
      </Table>

      <Modal show={selectedCargo !== null} onHide={() => setSelectedCargo(null)} centered>
        <Modal.Header closeButton><Modal.Title>{selectedCargo?.cargo}</Modal.Title></Modal.Header>
        <Modal.Body>
          {selectedCargo && (
            <>
              <p><strong>Nível:</strong> {selectedCargo.nivel}</p>
              <p><strong>Piso:</strong> {money.format(selectedCargo.piso)}</p>
              <p><strong>Reajuste:</strong> {selectedCargo.reajuste}</p>
              <p><strong>Carga horária:</strong> {selectedCargo.cargaHoraria}</p>
              <p className="mb-0"><strong>Atividades:</strong> {selectedCargo.descricao}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer><Button variant="danger" onClick={() => setSelectedCargo(null)}>Fechar</Button></Modal.Footer>
      </Modal>
    </>
  );
}

export default SalaryTable;
