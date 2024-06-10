import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
  } from "@/components/ui/table"
  
export function PrevUploads() {
	const dummy_data = [
		{
			"uploadDt":"2024-05-06",
			"progress":0.4,
			"projectedCompletionDt":"2024-05-06",
			"jobId":"#645278",
		},
		{
			"uploadDt":"2024-03-21",
			"progress":1,
			"projectedCompletionDt":"done",
			"jobId":"#615200",
		},
		{
			"uploadDt":"2024-12-17",
			"progress":1,
			"projectedCompletionDt":"done",
			"jobId":"#565213",
		},
		{
			"uploadDt":"2023-03-11",
			"progress":1,
			"projectedCompletionDt":"done",
			"jobId":"#365252",
		},
		{
			"uploadDt":"2023-01-22",
			"progress":1,
			"projectedCompletionDt":"done",
			"jobId":"#665293",
		},
	]
	return (
		<div>
			<div className="font-ubuntu flex gap-2 flex-col max-w-screen-lg mx-auto">
				<span className="font-medium text-lg indent-8"></span>
				<Card>
					<CardHeader>
						<CardTitle>
							Previous Uploads
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[200px]">Upload Date</TableHead>
									<TableHead>Job Id</TableHead>
									<TableHead className="text-center">Projected Completion Date</TableHead>
									<TableHead className="text-center">Progress</TableHead>
									<TableHead className="text-right">Results</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{dummy_data.map((item)=>{
									return (
										<TableRow>
											<TableCell className="font-medium">{item["uploadDt"]}</TableCell>
											<TableCell>{item["jobId"]}</TableCell>
											<TableCell className="text-center">{item["projectedCompletionDt"]}</TableCell>
											<TableCell className="text-right"><Progress value={item["progress"] * 100}></Progress></TableCell>
											<TableCell className="flex justify-end">
												<a
													className={`hover:cursor-pointer text-right ${item['progress'] !== 1 ? 'pointer-events-none opacity-50' : ''}`}
												>
													<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="lucide lucide-external-link"
													>
													<path d="M15 3h6v6" />
													<path d="M10 14 21 3" />
													<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
													</svg>
												</a>
											</TableCell>

										</TableRow>
									)
								})}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
			
		</div>
	);
}
export default PrevUploads;

