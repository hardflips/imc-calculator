<script>
    import {
        Container,
        Row,
        Col,
        Alert,
        Card,
        CardHeader,
        CardTitle,
        CardBody,
        CardSubtitle,
        CardText,
        ListGroup,
        ListGroupItem,
        Badge
	} from 'sveltestrap';
</script>

<section id="information">
    <Container>
        <Row>
            <Col><h3 class="page-subtitle">Entenda seu resultado de IMC</h3></Col>
        </Row>
        <Row>
            <Col lg="6">
                <h4 class="subtitle">Abaixo do peso 
                    <div class="wrapper-badge low-bg-color">
                        <Badge>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480     C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/>
                                            <circle cx="176" cy="176" r="32"/>
                                            <circle cx="336" cy="176" r="32"/>
                                            <path d="M256,240c-79.529,0-144,64.471-144,144h32c0-61.856,50.144-112,112-112s112,50.144,112,112h32     C400,304.471,335.529,240,256,240z"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Badge>
                    </div>
                </h4>
                <p>
                    Estar abaixo do peso pode ser um sinal de que você <strong>não está comendo o suficiente</strong> ou pode até estar doente. Um <strong>clínico geral</strong> pode ajudar.
                </p>
            </Col>
            <Col lg="6">
                <h4 class="subtitle">Peso saudável 
                    <div class="wrapper-badge normal-bg-color">
                        <Badge>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480    C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <circle cx="176" cy="176" r="32"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <circle cx="336" cy="176" r="32"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M368,256c0,61.856-50.144,112-112,112s-112-50.144-112-112h-32c0,79.529,64.471,144,144,144s144-64.471,144-144H368z"/>
                                    </g>
                                </g>
                            </svg>
                        </Badge>
                    </div>
                </h4>
                <p>Bom trabalho! Mantenha sua rotina de <strong>exercícios</strong> e <strong>alimentação saudável</strong> sempre!</p>
            </Col>
            </Row>
            <Row>
                <Col lg="6">
                <h4 class="subtitle">Sobrepeso
                    <div class="wrapper-badge override-bg-color">
                        <Badge>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480     C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/>
                                            <circle cx="176" cy="176" r="32"/>
                                            <circle cx="336" cy="176" r="32"/>
                                            <path d="M256,256c-35.346,0-64,28.654-64,64c0,35.346,28.654,64,64,64c35.346,0,64-28.654,64-64C320,284.654,291.346,256,256,256     z M256,352c-17.673,0-32-14.327-32-32c0-17.673,14.327-32,32-32c17.673,0,32,14.327,32,32C288,337.673,273.673,352,256,352z"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Badge>
                    </div>
                </h4>
                <p>
                Se você estiver acima do peso a melhor maneira de perder peso é através de uma combinação de <strong>dieta</strong> e <strong>exercício</strong>.
                </p>
            </Col>
            <Col lg="6">
                <h4 class="subtitle">Obeso 
                    <div class="wrapper-badge obesity-bg-color">
                        <Badge>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480     C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/>
                                            <circle cx="176" cy="176" r="32"/>
                                            <circle cx="336" cy="176" r="32"/>
                                            <path d="M320,256H192c-35.346,0-64,28.654-64,64c0,35.346,28.654,64,64,64h128c35.346,0,64-28.654,64-64     C384,284.654,355.346,256,320,256z M320,352H192c-17.673,0-32-14.327-32-32c0-17.673,14.327-32,32-32h128     c17.673,0,32,14.327,32,32C352,337.673,337.673,352,320,352z"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Badge>
                    </div>
                </h4>
                <p>A melhor maneira de perder peso se você pra você é através de uma combinação de <strong>dieta</strong>, <strong>exercício</strong> e em alguns casos até medicamentos.<br>Para obter ajuda e conselhos, consulte um <strong>médico</strong>.
                </p>
            </Col>
            <Col lg="6">
                <h4 class="subtitle">Obeso mórbido
                    <div class="wrapper-badge morbid-bg-color">
                        <Badge>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480     C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/>
                                            <path d="M222.72,214.08c2.465-5.99,1.075-12.875-3.52-17.44l-64-64l-22.56,22.72l36.8,36.64H128v32h80     C214.459,223.968,220.266,220.055,222.72,214.08z"/>
                                            <path d="M379.36,155.36l-22.72-22.72l-64,64c-6.274,6.223-6.316,16.353-0.093,22.627c3.027,3.052,7.155,4.758,11.453,4.733h80     v-32h-41.44L379.36,155.36z"/>
                                            <path d="M313.92,307.04l-35.52,25.28l-35.52-25.28c-5.555-3.955-13.005-3.955-18.56,0l-35.52,25.28l-35.52-25.28l-18.56,25.92     l44.8,32c5.555,3.955,13.005,3.955,18.56,0l35.52-25.28l35.52,25.28c5.555,3.955,13.005,3.955,18.56,0l35.52-25.44l35.52,25.44     l18.56-26.08l-44.8-32C326.891,302.973,319.44,303.037,313.92,307.04z"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Badge>
                    </div>
                </h4>
                <p>Procure um médico ou nutricionista para ajudá-lo. Para perder peso, você deve reduzir o número de calorias consumidas. Comece acompanhando tudo o que você come. Considere adicionar atividade física depois de atingir um objetivo mínimo de 10% de perda de peso.</p>
            </Col>
        </Row>
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
        <Row>
            <Col lg="12">
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
        </Row>
    </Container>
</section>

<style>
    :global(.row) {
        margin-top: 32px;
        margin-bottom: 32px;
    }
    #information {
        position: relative;
        z-index: 0;
    }
    .page-subtitle {
        margin-top: 24px;
    }
    .subtitle {
        display: flex;
        align-items: center;
    }
    .wrapper-badge {
        margin-left: 8px;
    }
    .wrapper-badge :global(.badge) {
        width: 32px;
        height: 32px;
        padding: 0;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .wrapper-badge :global(.badge svg) {
        fill: #333;
        width: 20px;
    }
    .low-bg-color :global(.badge) {
        background-color: #ffc107;
    }
    .normal-bg-color :global(.badge) {
        background-color: #8bc34a;
    }
    .override-bg-color :global(.badge) {
        background-color: #ffa726;
    }
    .obesity-bg-color :global(.badge) {
        background-color: #ef6c00;
    }
    .morbid-bg-color :global(.badge) {
        background-color: #c62828;
    }
    .morbid-bg-color :global(.badge svg) {
        fill: white;
    }
    @media (min-width:320px) {
        #information {
            top: 320px;
        }
    }
	@media (min-width: 801px) {
        #information {
            top: auto;
        }
    }
</style>