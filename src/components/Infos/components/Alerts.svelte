<script>
    import {
        Row,
        Col,
        Alert
    } from 'sveltestrap';
</script>


<section id="alertas">
    <Row>
        <Col lg="12">
            <h2>Alertas</h2>
            <p>
                Seu IMC pode dizer se você está carregando muito peso, mas fique atento, ela não pode te dizer se você está carregando muita gordura.
            </p>
        </Col>
    </Row>
    <Row>
        <Col lg="6">
            <Alert color="info">
                <h5 class="alert-heading text-capitalize">Distinção</h5>
                O IMC não mostra a diferença entre excesso de gordura, músculo ou osso.
            </Alert>
        </Col>
        <Col lg="6">
            <Alert color="warning">
                <h5 class="alert-heading text-capitalize">Aplicação</h5>
                O IMC adulto não leva em consideração idade, sexo ou massa muscular.
            </Alert>
        </Col>
    </Row>
</section>