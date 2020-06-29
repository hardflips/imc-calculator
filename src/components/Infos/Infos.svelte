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
    
    import Chart from 'svelte-frappe-charts';

    let dataMan = {
        labels: ['1974-75', '1989', '2002-03', '2008-09'],
        datasets: [
            {   
                name: 'Acima do peso',
                values: [18.5, 29.9, 41.4, 50.1],
            },
            {   
                name: 'Obesidade',
                values: [8, 4.4, 3.1, 1.8]
            },
            {
                name: 'Abaixo do peso',
                values: [2.8, 5.4, 9, 12.4]
            }
        ],
        yMarkers: [{ label: '50% (Metade da população)', value: 50, options: { labelPos: 'left' }}]
    };

    let dataWoman = {
        labels: ['1974-75', '1989', '2002-03', '2008-09'],
        datasets: [
            {   
                name: 'Acima do peso',
                values: [28.7, 41.4, 40.9, 48.0],
            },
            {   
                name: 'Obesidade',
                values: [8, 13.2, 13.5, 16.9]
            },
            {
                name: 'Abaixo do peso',
                values: [11.8, 6.4, 5.6, 3.6]
            }
        ],
        yMarkers: [{ label: '50% (Metade da população)', value: 50, options: { labelPos: 'left' }}]
    };

    let dataContinent = {
        labels: ['África', ' Ásia', ' Europa', ' América Latina/Caribe', 'América do Norte' , 'Oceania'],
        datasets: [
            {   
                name: 'Homens',
                values: [6, 7, 20.8, 19, 32.3, 25]
            },
            {   
                name: 'Mulheres',
                values: [17, 9, 22.1, 27.1, 33, 28]
            },
        ],
        yMarkers: [{ label: '50% (Metade da população)', value: 50, options: { labelPos: 'left' }}]
    };

    let dataBrazil = {
        labels: [
            'AC-Rio Branco',
            'AL-Maceió',
            'AP-Macapá',
            'AM-Manaus',
            'BA-Salvador',
            'CE-Fortaleza',
            'DF-Brasília',
            'ES-Vitória',
            'GO-Goiânia',
            'MA-São Luís',
            'MT-Cuiabá',
            'MS-Campo Grande',
            'MG-Belo Horizonte',
            'PA-Belém',
            'PB-João Pessoa',
            'PR-Curitiba',
            'PE-Recife',
            'PI-Teresina',
            'RJ-Rio de Janeiro',
            'RN-Natal',
            'RS-Porto Alegre',
            'RO-Porto Velho',
            'RR-Boa Vista',
            'SC-Florianópolis',
            'SP-São Paulo',
            'SE-Aracaju',
            'TO-Palma '
        ],
        datasets: [
            {
                name: 'da população',
                values: [60.6, 55.4, 52.8, 56.3, 53.8, 56.5, 48.8, 49.7, 48.5, 47.9, 56.4, 58, 49.6, 54.4, 56.6, 54.2, 55.6, 51.6, 55.8, 56.6, 54.9, 55.6, 52.8, 48.8, 53.9, 55.7, 47.7]
            }
        ]
    };

    let dataCauses = {
        labels: ['Sedentarismo', 'Hormônios', 'Alimentos'],
        datasets: [
            {
                values: [36.8, 10.5, 52.6]
            }
        ]
    };
    
</script>

<div id="information">
    <Container>
        <section id="resultado">
            <Row>
                <Col lg="6">
                    <small class="update-info">Última atualização: <strong>29/06/2020 - 18:12</strong></small>
                </Col>
                <Col lg="6">
                    <p class="feedback-question">Esta página foi útil?</p>
                    <div class="feedback text-right">
                        <a href="/yes" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 80" style="enable-background:new 0 0 64 64;" xml:space="preserve"><g><path d="M61.3,34.9l-2.7,19.7c0,0-0.3,4.3-7.2,5.7H25.4c-0.2,0-0.4,0-0.6-0.1l0,0c-3.2-0.6-5.4-3.4-5.4-6.6V31.3   c0-1.1,0.5-2.1,1.3-2.8c4.5-4.1,9.6-7.9,12-13.6c0.7-1.6,1.2-3.4,1.6-5.1c0.2-0.8,0.3-1.7,0.4-2.5c0-0.9,0.1-1.8,0.7-2.6   c0.5-0.7,1.3-1.1,2.1-1.1c2.2-0.2,5,2.2,5.5,4.3c0.6,2.7,0.5,5.5,0,8.2c-0.2,1.3-0.6,2.7-1,4c-0.1,0.3-0.6,2-1.1,3.2   c-0.2,0.5,0.2,1.1,0.7,1.1l15,0.5C56.5,25,63.2,26.4,61.3,34.9z"/><path d="M16.4,28.3v31.2c0,0.3-0.2,0.5-0.5,0.5h-3.1c-0.7,0-1.3-0.5-1.5-1.1L2.4,29.8c-0.3-1,0.5-2.1,1.5-2.1h11.9   C16.2,27.7,16.4,28,16.4,28.3z"/></g><text x="0" y="79" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></svg> Sim</a>
                        <a href="/no" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 80" style="enable-background:new 0 0 64 64;" xml:space="preserve"><g><path d="M2.7,29.1L5.4,9.3c0,0,0.3-4.3,7.2-5.7h26.1c0.2,0,0.4,0,0.6,0.1l0,0c3.2,0.6,5.4,3.4,5.4,6.6v22.4c0,1.1-0.5,2.1-1.3,2.8   c-4.5,4.1-9.6,7.9-12,13.6c-0.7,1.6-1.2,3.4-1.6,5.1c-0.2,0.8-0.3,1.7-0.4,2.5c0,0.9-0.1,1.8-0.7,2.6c-0.5,0.7-1.3,1.1-2.1,1.1   c-2.2,0.2-5-2.2-5.5-4.3c-0.6-2.7-0.5-5.5,0-8.2c0.2-1.3,0.6-2.7,1-4c0.1-0.3,0.6-2,1.1-3.2c0.2-0.5-0.2-1.1-0.7-1.1L7.5,39   C7.5,39,0.8,37.6,2.7,29.1z"/><path d="M47.6,35.7V4.5c0-0.3,0.2-0.5,0.5-0.5h3.1c0.7,0,1.3,0.5,1.5,1.1l8.8,29.1c0.3,1-0.5,2.1-1.5,2.1H48.1   C47.8,36.3,47.6,36,47.6,35.7z"/></g><text x="0" y="79" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></svg> Não</a>
                    </div>
                </Col>
            </Row>
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
        </section>
        <section id="infograficos">
            <Row>
                <Col><h3 class="page-subtitle">Infográficos</h3></Col>
            </Row>
            <Row>
                <Col lg="6">
                    <h4>Homens</h4>
                    <span>Evolução dos indicadores de peso</span>
                    <Chart
                        data={dataMan}
                        type="line"
                        colors={['#ef6c00', '#c62828', '#ffa726']}
                        lineOptions={{
                            regionFill: 1,
                            dotSize: 5
                        }}
                        tooltipOptions={{
                            formatTooltipY: d => d + '%'
                        }}
                    />
                    <small>Fonte: <a href="https://www.ibge.gov.br/" target="_blank" title="IBGE">IBGE</a></small>
                </Col>
                <Col lg="6">
                    <h4>Mulheres</h4>
                    <span>Evolução dos indicadores de peso</span>
                    {#if dataWoman}
                        <Chart
                            data={dataWoman}
                            type="line"
                            colors={['#ef6c00', '#c62828', '#ffa726']}
                            lineOptions={{
                                regionFill: 1,
                                dotSize: 5
                            }}
                            tooltipOptions={{
                                formatTooltipY: d => d + '%'
                            }}
                        />
                    {/if}
                    <small>Fonte: <a href="https://www.ibge.gov.br/" target="_blank" title="IBGE">IBGE</a></small>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <h4>Excesso de peso nas capitais do Brasil</h4>
                    <span>A maior taxa de excesso de peso ficou em <b>Rio Branco-AC</b> e <b>Palmas-TO</b> a menor.</span>
                    {#if dataBrazil}
                        <Chart
                            data={dataBrazil}
                            type="bar"
                            colors={['#62f3bb']}
                            valuesOverPoints={true}
                            tooltipOptions={{
                                formatTooltipY: d => d + '%'
                            }}
                        />
                    {/if}
                    <small>Fonte: <a href="https://g1.globo.com/pb/paraiba/noticia/populacao-de-joao-pessoa-e-a-mais-obesa-do-nordeste-diz-ministerio-da-saude.ghtml" title="G1" target="_blank">G1</a></small>
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                    <h4>Taxa de obesidade entre adultos por região.</h4>
                    <span>% de pessoas com <strong>IMC</strong> de 30 ou superior.</span>
                    {#if dataContinent}
                        <Chart
                            data={dataContinent}
                            type="bar"
                            colors={['#3e85e4', '#ec70ff']}
                            tooltipOptions={{
                                formatTooltipY: d => d + '%'
                            }}
                        />
                    {/if}
                    <small>Fonte: Banco de dados do Observatório Global da OMS, <a href="http://ncdrisc.org/" target="_blank" title="NCD Risk Factor">NCD Risk Factor</a>. Dados de 2014</small>
                </Col>
                <Col lg="6">
                    <h4>Causas da obesidade</h4>
                    <span>Veja os <strong>principais fatores</strong> que levam a obesidade.</span>
                    {#if dataCauses}
                        <Chart
                            data={dataCauses}
                            type="pie"
                            tooltipOptions={{
                                formatTooltipY: d => d + '%'
                            }}
                        />
                    {/if}
                    <small>Fonte: <a href="https://www.ufpe.br/" title="UFPE: Universidade Federal de Pernambuco" target="_blank">UFPE: Universidade Federal de Pernambuco</a></small>
                </Col>
            </Row>
        </section>
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
    </Container>
</div>

<style>
    :global(.row) {
        margin-top: 32px;
        margin-bottom: 32px;
    }
    :global(.card) {
        margin-bottom: 24px;
    }
    #information {
        position: relative;
        z-index: 0;
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
    .update-info {
        width: 100%;
        display: block;
        margin: 0 0 16px 0;
        text-align: center;
    }
    .feedback-question {
        text-align: center;
        margin-bottom: 0;
        font-size: 14px;
        color: #2d3e4f;
    }
    .feedback {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 100px;
    }
    .feedback a {
        color: #2d3e4f;
        text-decoration: none;
        font-size: 14px;
    }
    .feedback a:hover {
        color: #3f4098;
    }
    .feedback svg {
        width: 16px;
        fill: #3f4098;
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
        .feedback-question {
            text-align: right;
        }
        .feedback {
            margin: 0;
            margin-left: auto;
        }
        .update-info {
            text-align: left;
            margin: 0;
        }
    }
</style>