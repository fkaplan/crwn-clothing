import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

//datayı artık directoryReducer üzerinden alıyoruz. Bu nedenle functional component kullanıcaz.
//state'e erişmemize gerek kalmadı.
const Directory = ({ sections }) => (
  //Aşağıdaki gibi tek tek parametreleri geçirebilirdik ama buna gerek yok
  // <div className="directory-menu">
  //   {this.state.sections.map((section) => (
  //     <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl}/>
  //   ))}
  // </div>

  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
