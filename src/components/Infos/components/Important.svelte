<script>
    import {
        Row,
        Col,
        Card,
        CardHeader,
        CardTitle,
        CardBody,
        CardSubtitle,
        CardText,
        ListGroup,
        ListGroupItem,
    } from 'sveltestrap';
</script>

<section id="importante">
    <Row>
        <Col lg="6">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h6>Importante:</h6>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <ListGroup>
                        <ListGroupItem><strong>01</strong> - Adultos e atletas musculosos podem ser classificados como "acima do peso" ou "obesos", embora a gordura corporal seja baixa.</ListGroupItem>
                        <ListGroupItem><strong>02</strong> - Os adultos que perdem músculos à medida que envelhecem podem cair na faixa de "peso saudável", embora possam estar carregando excesso de gordura.</ListGroupItem>
                        <ListGroupItem><strong>03</strong> - A gravidez também afeta o resultado do IMC da mulher. Você deve usar seu peso antes da gravidez ao calcular seu IMC.</ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
        <Col lg="6">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h6>Links úteis:</h6>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <ListGroup>
                        <ListGroupItem><a href="https://www.saude.gov.br/noticias/agencia-saude/45612-brasileiros-atingem-maior-indice-de-obesidade-nos-ultimos-treze-anos" target="_blank" title="Brasileiros atingem maior índice de obesidade nos últimos treze anos">Brasileiros atingem maior índice de obesidade nos últimos treze anos</a></ListGroupItem>
                        <ListGroupItem><a href="https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/25261-ibge-da-inicio-a-pesquisa-nacional-de-saude-pns-2019" target="_blank" title="IBGE dá início à Pesquisa Nacional de Saúde (PNS) 2019">IBGE dá início à Pesquisa Nacional de Saúde (PNS) 2019</a></ListGroupItem>
                        <ListGroupItem><a href="https://brasilescola.uol.com.br/educacao-fisica/Indice-massa-corporal-imc.htm" target="_blank" title="Índice de massa corporal (IMC)"><strong>Índice de massa corporal (IMC)</strong></a></ListGroupItem>
                        <ListGroupItem><a href="https://www.youtube.com/watch?v=nLEZhM5vx0I" target="_blank" title="Limitações do Índice de Massa Corporal">Limitações do Índice de Massa Corporal (Youtube)</a></ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    </Row>
</section>

<style>
    :global(#importante .card-header) {
        background-color: #f2f2f2;
    }
</style>