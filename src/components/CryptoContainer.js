import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { fetchCoinData } from '../actions/coinData';
import { screenChange } from '../actions/screen';
import CoinCard from './CoinCard';
import CoinDetails from './CoinDetails';

class CryptoContainer extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchCoinData());
    }

    renderCoinCards() {
        
        const { coin } = this.props;
        const data = Object.keys(coin.data.data);

        if(this.props.screen) {
            let focusedCoin = {};
            data.forEach(index => {
                let c = coin.data.data[index];
                if (c.name === this.props.screen) {
                    focusedCoin = c;
                }
            })
            return <CoinDetails focusedCoin={focusedCoin}/>;
        }
        
        const coins = [];

        data.forEach( index => {
            const c = coin.data.data[index];
            console.log(c);
            coins.push(
                <CoinCard
                key = {index}
                coin_name={c.name}
                symbol={c.symbol}
                price_usd={c.quotes ? c.quotes.USD.price: 'unknown'}
                percent_change_24h={c.quotes ? c.quotes.USD.percent_change_24h: 'unknown'}
                percent_change_7d={c.quotes ? c.quotes.USD.percent_change_7d: 'unknown'}
                onPress={() => screenChange(c.name)}
            />
            )
        })
        return coins;
    }

    render() {

        const { coin } = this.props;
        const { contentContainer } = styles;

        if (coin.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={coin.isFetching}
                        textContent={'Loading...'}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }

        if (coin.data) {
            console.log(Object.keys(coin.data));
            return (
                <ScrollView contentContainerStyle={contentContainer}>
                    {this.renderCoinCards()}
                </ScrollView>
            )
        }
        console.log(coin.errorMessage);
        return (
            <ScrollView contentContainerStyle={contentContainer}>
                <Text>
                    Error!!
                </Text>
            </ScrollView>
        )
        
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

function mapStateToProps(state) {
    return {
        coin: state.coin,
        screen: state.screen.screen,
    }
}

export default connect(mapStateToProps)(CryptoContainer)