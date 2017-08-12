import React, { Component } from 'react';
import {
  SearchBox,
  Hits,
  HitItemProps,
  HitsStats,
  RefinementListFilter,
  Pagination,
  ResetFilters,
  MenuFilter,
  SelectedFilters,
  HierarchicalMenuFilter,
  NumericRefinementListFilter,
  SortingSelector,
  SearchkitComponent,
  SearchkitProvider,
  SearchkitManager,
  NoHits,
  RangeFilter,
  InitialLoader,
  ViewSwitcherToggle,
  ViewSwitcherHits,
  Layout, LayoutBody, LayoutResults,
  SideBar, TopBar,
  ActionBar, ActionBarRow
} from "searchkit";
import { get } from "lodash";

const searchkit = new SearchkitManager("http://localhost:9200/wordlist");

const HitItem = (props) => (
  <div className={props.bemBlocks.item().mix(props.bemBlocks.container("item"))}>
    <img className={props.bemBlocks.item("poster")} alt={props.result._source.meaning}/>
    <div className={props.bemBlocks.item("title")} dangerouslySetInnerHTML={{__html: get(props.result,"highlight.word",props.result._source.word)}}></div>
  </div>
);

class SearchApp extends SearchkitComponent {

    render() {
        return(
            <SearchkitProvider searchkit={searchkit}>
                <div>
                    <SearchBox
                        searchOnChange={false}
                        queryFields={["word"]}/>
                    <Hits hitsPerPage={20} highlightFields={["word"]} mod="sk-hits-grid" itemComponent={HitItem}/>
                </div>
            </SearchkitProvider>
        );
    }
}

export default SearchApp;