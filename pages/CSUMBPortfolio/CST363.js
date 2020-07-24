import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST363 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 363",
			classDesc: "This class focused on Database Management and interaction. Databases are used in most applications and are an important type of external storage that allows for data changes in a program without needing to recompile. Databases used individually are a useful statistic and tracking tool as well as an efficient means of storing program related data. Most languages have some ability to directly work with databases. The SQL language specifically is important because it is used broadly across multiple industries.",
			imgDir: "/images/363images/"
		}
	}
	render() {
		let desc = this.state.classDesc;
		let imgDir = this.state.imgDir;
		let select = [
			{
				title:"Select Where is NULL",
				code:`SELECT invoice_number, invoice_date, (invoice_total - payment_total) as balance_due, payment_date
FROM invoices
WHERE payment_date IS NULL;
`,
			
				img1:"selectNull.png",
				desc:"I found this really useful as a way of selecting events that haven't happened yet. This use case is looking for all of the invoices that have not been paid yet by checking if there is not a payment date.",
			},
			{
				title:"Concat, Order By",
				code:`SELECT vendor_name, CONCAT(vendor_contact_last_name, ", ", vendor_contact_first_name) as full_name
FROM vendors
WHERE vendor_contact_last_name REGEXP '^[A-C]|^[E]'
ORDER BY vendor_contact_last_name, vendor_contact_first_name;`,
			
				img1:"concatOrder.png",
				desc:"This was a good way of selecting events that haven't happened yet. This use case is looking for all of the invoices that have not been paid yet by checking if there is not a payment date.",
			},
			{
				title:"Select Date",
				code:`SELECT DATE_FORMAT(CURRENT_DATE, '%m-%d-%Y') as 'current_date';`,
			
				img1:"selectDate.png",
				desc:"Being able to get the current date from MySQL is useful when having to check how recent one of your entries is.",
			},
		];
		let join = [
			{
				title:"Joining Three Tables",
				code:`SELECT v.vendor_name, i.invoice_date, i.invoice_number, li.invoice_sequence as li_sequence, li.line_item_amount as li_amount  FROM vendors v
JOIN Invoices i
    ON v.vendor_id = i.vendor_id
JOIN invoice_line_items li
    ON i.invoice_id = li.invoice_id
ORDER BY v.vendor_name, i.invoice_date, i.invoice_number, li.invoice_sequence;`,
			
				img1:"joinThree.png",
				desc:"Joining different tables means that you can keep data separated. This is one of the key advantages of MySQL over a NoSQL solution.",
			},
			{
				title:"Group By",
				code:`SELECT v.vendor_name, COUNT(*), SUM(i.invoice_total) FROM vendors v
JOIN invoices i 
ON v.vendor_id = i.vendor_id
GROUP BY v.vendor_name
ORDER BY COUNT(*) DESC;`,
			
				img1:"groupBy.png",
				desc:"Group By can take data that is spread out from multiple rows with a common column, such as vendor name in the example, and count the occurrences. You can also sum if it is a number or you could find the max or min.",
			},
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					{/*<h1 className="text-center">{name}</h1>*/}
					<p className="desc">{desc}</p>
					{/* requires 2 items in */}
					<Tabs>
						<div label="MySQL Select">
							<p>The select statement is a basic operation that, when chained with the rest of the language, can fetch complex tables with short queries.</p>
							<Imgs imgs={select} imgDir={this.state.imgDir} lang={"sql"} />
						</div>
						<div label="Joins">
							<p>Joining tables is where MySQL really gets to show its power as it allows you to merge different tables based on a similar key.</p>
							<Imgs imgs={join} imgDir={this.state.imgDir} lang={"sql"} />
						</div>
					</Tabs>
				</div>
			</Layout>
											);
	}
}

export default CST363;
