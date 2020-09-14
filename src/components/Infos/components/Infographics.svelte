<script>
    import {
        Row,
        Col
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
            'TO-Palmas'
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
    <Row class="hide-mobile">
        <Col lg="12">
            <h4>Excesso de peso nas capitais do Brasil</h4>
            <span>A maior taxa de excesso de peso ficou em <b>Rio Branco (AC)</b> e <b>Palmas (TO)</b> a menor.</span>
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
            <span>% de pessoas com <strong>IMC</strong> de <strong>30</strong> ou superior.</span>
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
                    height="400"
                    tooltipOptions={{
                        formatTooltipY: d => d + '%'
                    }}
                />
            {/if}
            <small>Fonte: <a href="https://www.ufpe.br/" title="UFPE: Universidade Federal de Pernambuco" target="_blank">UFPE: Universidade Federal de Pernambuco</a></small>
        </Col>
    </Row>
</section>

<style>
    :global(.hide-mobile) {
        display: none;
    }
    @media (min-width: 801px) {
        :global(.hide-mobile) {
            display: block;
        }
    }
</style>