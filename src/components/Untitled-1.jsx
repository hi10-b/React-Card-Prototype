  {
                topGrid.map((value, key) => {
                    return (
                        //panel with top grid info
                        <Col xl={3} className={'mt-4 card-container'}>
                            {/* <CardBlock header={value.company} body={value.ticker} footer={value.stockPrice} /> */}
                            {props.children}
                        </Col>
                    )
                })}