import React, {Component} from 'react';
import {
    ClearAll,
    Configure,
    Highlight,
    Hits,
    InstantSearch,
    Menu,
    Pagination,
    Panel,
    RefinementList,
    SearchBox,
    Snippet,
    SortBy,
    Stats
} from 'react-instantsearch-dom';

const Sidebar = () =>
    <div className="sidebar"></div>

const Content = () =>
    <div className="content">
        <div className="info">
            <Stats />
            <SortBy
                defaultRefinement="instant_search" items={[
                {value:'instant_search', label:'Most relevant'},
                {value:'instant_search_price_asc', label:'Lowest Price'},
                {value:'instant_search_price_desc', label:'Highest Price'}
                ]}
            />
        </div>
        <Hits hitComponent={Hit}/>
        <div className="pagination">
            <Pagination showLast />
        </div>
    </div>

const Hit = ({hit}) => {
    return (
        <div className="hit">
            <div className="hit-image">
                <img src={hit.image}/>
            </div>
            <div className="hit-content">
                <div className="hit-price">
                    ${hit.price}
                </div >
                <div className="hit-name">
                    <Highlight attributName="name" hit={hit} />
                </div>
                <div className="hit-description">
                    <Highlight attributName="description" hit={hit} />
                </div>
            </div>
        </div>
    );
};

class App extends Component {

    render() {
        return (
            <InstantSearch
                appId="latency"
                apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
                indexName="bestbuy"
            >
                {/* Search widgets will go there */}
                <header className="header">
                    <img src="instant_search_logo@2x.png"/>
                    <SearchBox
                        translations={{
                            placeholder: 'Recherchez des pages, documents...',
                        }}
                    />
                </header>
                <main>
                    <Sidebar/>
                    <Content/>
                </main>

            </InstantSearch>
        )
    }
}

export default App;
