import { Button } from "@/components/ui/button";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import Image from "next/image";

const challengeList = Array.from({ length: 10 }, (_, i) => ({
	day: i + 1,
	title: `Day + ${i + 1}`,
	description: `Challenge for Day ${i + 1}`,
	imageUrl: null,
	link: `#day-${i + 1}`,
}));

export default function Home() {
	return (
		<div>
			<header>
				<section className="w-full py-12 md:py-16 space-y-6">
					<h1 className="text-4xl font-regular ml-32 text-slate-200">
						100 Days CSS Challenge
					</h1>
					<p className="mx-32 text-xl text-slate-500">
						The following shows all the works I have completed in this challenge,
						hoping to give you some help.🍀
					</p>
				</section>
			</header>
			<main>
				<section className="py-12">
					<div className="grid gap-6 mx-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{challengeList.map((c) => {
							return (
								<a
									key={c.day}
									href={c.link}
									className="block relative rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 overflow-hidden"
								>
									<Image
										src={
											c.imageUrl ||
											`https://placehold.co/200x200/e2e8f0/64748b?text=Day ${c.day}`
										}
										alt={c.title}
										width={200}
										height={200}
										className="object-cover w-full h-[200px]"
									/>
									<div className="p-4">
										<h2 className="font-semibold text-lg">{c.title}</h2>
										<p className="text-sm text-gray-500">{c.description}</p>
									</div>
								</a>
							);
						})}
					</div>
					<div className="pt-12">
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious href="#" />
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href="#">1</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationEllipsis />
								</PaginationItem>
								<PaginationItem>
									<PaginationNext href="#" />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				</section>
			</main>
			<footer className="py-6 border-t border-t-slate-800">
				<div className="flex justify-center items-center gap-4 ">
					<Button
						size="icon"
						variant="ghost"
					>
						<GitHubLogoIcon className="h-4 w-4" />
						<span className="sr-only">GitHub</span>
					</Button>
					<Button
						size="icon"
						variant="ghost"
					>
						<MailIcon className="h-4 w-4" />
						<span className="sr-only">Email</span>
					</Button>
				</div>
			</footer>
		</div>
	);
}
